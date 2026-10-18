import { Fragment, useEffect, useRef } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/*
 * Background network: drifting nodes link up when close, data packets hop
 * along those links, the cursor pulls nearby nodes in, and a click sends a
 * shockwave through the graph.
 */
export function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = prefersReducedMotion();
    const linkDistance = 140;
    const mouse = { x: -9999, y: -9999, active: false };
    let width = 0;
    let height = 0;
    let nodes = [];
    let packets = [];
    let pulses = [];
    let frame;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(120, Math.max(36, (width * height) / 13000)));
      nodes = Array.from({ length: count }, () => {
        const vx = (Math.random() - 0.5) * 0.3;
        const vy = (Math.random() - 0.5) * 0.3;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx,
          vy,
          baseVx: vx,
          baseVy: vy,
          r: Math.random() * 1.3 + 0.7,
        };
      });
      packets = [];
      if (reduced) draw(false);
    }

    function update() {
      nodes.forEach((node) => {
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 220 && distance > 1) {
            const force = (1 - distance / 220) * 0.035;
            node.vx += (dx / distance) * force;
            node.vy += (dy / distance) * force;
          }
        }

        pulses.forEach((pulse) => {
          const dx = node.x - pulse.x;
          const dy = node.y - pulse.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 1 && Math.abs(distance - pulse.r) < 36) {
            const force = (1 - pulse.r / pulse.max) * 1.6;
            node.vx += (dx / distance) * force;
            node.vy += (dy / distance) * force;
          }
        });

        // Ease back toward each node's own lazy drift after being disturbed.
        node.vx += (node.baseVx - node.vx) * 0.025;
        node.vy += (node.baseVy - node.vy) * 0.025;
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;
      });

      pulses.forEach((pulse) => {
        pulse.r += 7;
      });
      pulses = pulses.filter((pulse) => pulse.r < pulse.max);
    }

    function draw(animate) {
      ctx.clearRect(0, 0, width, height);
      const neighbors = nodes.map(() => []);

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (Math.abs(dx) > linkDistance || Math.abs(dy) > linkDistance) continue;
          const distance = Math.hypot(dx, dy);
          if (distance > linkDistance) continue;

          neighbors[i].push(j);
          neighbors[j].push(i);

          const nearMouse =
            mouse.active && Math.hypot(mouse.x - (a.x + b.x) / 2, mouse.y - (a.y + b.y) / 2) < 180;
          const alpha = (1 - distance / linkDistance) * (nearMouse ? 0.45 : 0.14);
          ctx.strokeStyle = `rgba(94, 225, 255, ${alpha})`;
          ctx.lineWidth = nearMouse ? 1 : 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          if (animate && packets.length < 18 && Math.random() < 0.0006) {
            packets.push({ from: i, to: j, t: 0, speed: 0.008 + Math.random() * 0.012 });
          }
        }
      }

      if (mouse.active) {
        nodes.forEach((node) => {
          const distance = Math.hypot(mouse.x - node.x, mouse.y - node.y);
          if (distance < 170) {
            ctx.strokeStyle = `rgba(84, 242, 163, ${(1 - distance / 170) * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(node.x, node.y);
            ctx.stroke();
          }
        });
      }

      nodes.forEach((node, index) => {
        const busy = neighbors[index].length;
        ctx.fillStyle = `rgba(237, 237, 239, ${Math.min(0.25 + busy * 0.08, 0.75)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (animate) {
        packets = packets.filter((packet) => {
          const a = nodes[packet.from];
          const b = nodes[packet.to];
          if (Math.hypot(a.x - b.x, a.y - b.y) > linkDistance * 1.25) return false;

          packet.t += packet.speed;
          if (packet.t >= 1) {
            // Hop onward to another neighbour, like a request fanning out.
            const onward = neighbors[packet.to].filter((n) => n !== packet.from);
            if (!onward.length || Math.random() < 0.25) return false;
            packet.from = packet.to;
            packet.to = onward[Math.floor(Math.random() * onward.length)];
            packet.t = 0;
            return true;
          }

          const x = a.x + (b.x - a.x) * packet.t;
          const y = a.y + (b.y - a.y) * packet.t;
          ctx.fillStyle = "rgba(84, 242, 163, 0.16)";
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "rgba(160, 255, 210, 0.95)";
          ctx.beginPath();
          ctx.arc(x, y, 1.8, 0, Math.PI * 2);
          ctx.fill();
          return true;
        });

        pulses.forEach((pulse) => {
          ctx.strokeStyle = `rgba(94, 225, 255, ${(1 - pulse.r / pulse.max) * 0.5})`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.arc(pulse.x, pulse.y, pulse.r, 0, Math.PI * 2);
          ctx.stroke();
        });
      }
    }

    function tick() {
      update();
      draw(true);
      frame = requestAnimationFrame(tick);
    }

    function onPointerMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = event.pointerType === "mouse";
    }

    function onPointerLeave() {
      mouse.active = false;
    }

    function onPointerDown(event) {
      pulses.push({ x: event.clientX, y: event.clientY, r: 0, max: 420 });
    }

    function onVisibility() {
      cancelAnimationFrame(frame);
      if (!document.hidden) frame = requestAnimationFrame(tick);
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduced) {
      return () => window.removeEventListener("resize", resize);
    }

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas className="network" ref={canvasRef} aria-hidden="true" />;
}

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const target = { x: -100, y: -100 };
    const current = { ...target };
    let frame;

    function onPointerMove(event) {
      target.x = event.clientX;
      target.y = event.clientY;
      dot.style.translate = `${target.x}px ${target.y}px`;
      root.classList.add("cursor-visible");
      ring.classList.toggle("is-hover", Boolean(event.target.closest("a, button, [data-cursor]")));
      ring.classList.toggle("is-text", Boolean(event.target.closest("input, textarea")));
    }

    function onPointerDown() {
      ring.classList.add("is-down");
    }

    function onPointerUp() {
      ring.classList.remove("is-down");
    }

    function onLeave() {
      root.classList.remove("cursor-visible");
    }

    function tick() {
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;
      // `translate` rather than `transform`, which would be multiplied by the hover `scale`.
      ring.style.translate = `${current.x}px ${current.y}px`;
      frame = requestAnimationFrame(tick);
    }

    root.classList.add("has-cursor");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      root.classList.remove("has-cursor", "cursor-visible");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
    </>
  );
}

export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let frame;

    function measure() {
      frame = undefined;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      barRef.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="scroll-progress" ref={barRef} aria-hidden="true" />;
}

// Attaches pointer handlers to every element matching `selector` once the page mounts.
function usePointerEffect(selector, onMove, onLeave) {
  useEffect(() => {
    if (!hasFinePointer() || prefersReducedMotion()) return undefined;

    const cleanups = Array.from(document.querySelectorAll(selector)).map((element) => {
      const move = (event) => onMove(element, event, element.getBoundingClientRect());
      const leave = () => onLeave(element);
      element.addEventListener("pointermove", move);
      element.addEventListener("pointerleave", leave);
      return () => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, [selector]);
}

export function useMagnetic() {
  usePointerEffect(
    "[data-magnetic]",
    (element, event, rect) => {
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      element.style.transform = `translate(${dx * 0.3}px, ${dy * 0.45}px)`;
    },
    (element) => {
      element.style.transform = "";
    }
  );
}

export function useTilt() {
  usePointerEffect(
    "[data-tilt]",
    (element, event, rect) => {
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      element.style.setProperty("--rx", `${(0.5 - py) * 8}deg`);
      element.style.setProperty("--ry", `${(px - 0.5) * 10}deg`);
      element.style.setProperty("--gx", `${px * 100}%`);
      element.style.setProperty("--gy", `${py * 100}%`);
    },
    (element) => {
      element.style.setProperty("--rx", "0deg");
      element.style.setProperty("--ry", "0deg");
    }
  );
}

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/\\{}[]";

/*
 * Decodes `text` out of random glyphs. trigger="view" runs once when scrolled
 * into view; trigger="hover" reruns whenever the closest link is hovered.
 */
export function Scramble({ text, trigger = "view", className, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion()) return undefined;

    let frame;
    let timer;

    function run() {
      cancelAnimationFrame(frame);
      const start = performance.now();
      const plan = [...text].map((char, index) => ({
        char,
        resolveAt: index * 32 + 120 + Math.random() * 260,
      }));

      function step(now) {
        const elapsed = now - start;
        let settled = 0;
        element.textContent = plan
          .map(({ char, resolveAt }) => {
            if (char === " " || elapsed >= resolveAt) {
              settled += 1;
              return char;
            }
            return glyphs[Math.floor(Math.random() * glyphs.length)];
          })
          .join("");
        if (settled < plan.length) frame = requestAnimationFrame(step);
      }

      frame = requestAnimationFrame(step);
    }

    if (trigger === "hover") {
      const host = element.closest("a") ?? element;
      host.addEventListener("pointerenter", run);
      return () => {
        host.removeEventListener("pointerenter", run);
        cancelAnimationFrame(frame);
        element.textContent = text;
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          timer = setTimeout(run, delay);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      element.textContent = text;
    };
  }, [text, trigger, delay]);

  return (
    <span className={className} ref={ref}>
      {text}
    </span>
  );
}

// Splits text into per-letter spans (grouped by word so lines still wrap).
export function SplitText({ text }) {
  let index = 0;
  return text.split(" ").map((word, wordIndex, words) => (
    <Fragment key={word + wordIndex}>
      <span className="split-word" aria-hidden="true">
        {[...word].map((char) => {
          const i = index;
          index += 1;
          return (
            <span className="split-char" style={{ "--i": i }} key={i}>
              {char}
            </span>
          );
        })}
      </span>
      {wordIndex < words.length - 1 ? " " : null}
    </Fragment>
  ));
}
