import React, { useState, useEffect } from "react";
import {
  Grommet,
  Box,
  Heading,
  Paragraph,
  Button,
  Image as Picture,
} from "grommet";
import { Github, Domain } from "grommet-icons";
import AppBar from "./AppBar.js";
import Footer from "./Footer.js";

const theme = {
  global: {
    colors: {
      brand: "#116466",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function Portfolio() {
  const [loading, setLoading] = useState(true);

  async function cacheImages(imgs) {
    const promises = await imgs.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload(resolve());
        img.onerror(reject());
      });
    });
    await Promise.all(promises);
    setLoading(false);
  }

  useEffect(() => {
    const imgs = [
      "images/website.png",
      "images/mobilevitalsigns.png",
      "images/hungryvery.png",
      "images/dancedetection.png",
      "images/collegezone.jpeg",
    ];
    cacheImages(imgs);
  }, []);

  if (loading) {
    return (
      <Grommet theme={theme} full>
        <AppBar />
      </Grommet>
    );
  } else {
    return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar />
          <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
            <Box
              flex
              align="center"
              justify="start"
              pad="medium"
              animation="zoomIn"
            >
              <Heading level="2">Portfolio</Heading>
              <Heading level="3" textAlign="center">
                Portfolio Web Application
                <a href="https://github.com/fuadsahmawi/fuadsahmawi.github.io">
                  <Button icon={<Github />} onClick={() => {}} />
                </a>
                <a href="https://fuadsahmawi.github.io">
                  <Button icon={<Domain />} onClick={() => {}} />
                </a>
              </Heading>
              <Picture src="images/website.png" />
              <Paragraph textAlign="center">
                My own portfolio reactive web application which showcases my
                skills and projects that I've completed thus far.
                <Paragraph>
                  Technologies/Stack: React.js, JavaScript, HTML, Node.js
                </Paragraph>
              </Paragraph>

              <Heading level="3" textAlign="center">
                Mobile Vital Signs Monitoring System
              </Heading>
              <Picture src="images/mobilevitalsigns.png" />
              <Paragraph textAlign="center">
                System which incorporates bluetooth-enabled vital signs sensors
                communicating with microcontrollers which transfers data to a
                server, all done wirelessly.
                <Paragraph>
                  Technologies/Stack: CoffeeScript, Python, Elasticsearch,
                  Logstash, Kibana, ZeroMQ
                </Paragraph>
              </Paragraph>
              <Heading level="3" textAlign="center">
                HungryVery
                <a href="https://github.com/fuadsahmawi/HungryVery">
                  <Button icon={<Github />} onClick={() => {}} />
                </a>
              </Heading>
              <Picture src="images/hungryvery.png" />
              <Paragraph textAlign="center">
                Full-Stack Web Application. Food Delivery Service.
                <Paragraph>
                  Technologies/Stack: PostgreSQL, Express.js, React.js, Node.js,
                  JavaScript, HTML, CSS, SQL
                </Paragraph>
              </Paragraph>
              <Heading level="3" textAlign="center">
                Dance Detection
                <a href="https://github.com/fuadsahmawi/cg3002-dance-project">
                  <Button icon={<Github />} onClick={() => {}} />
                </a>
              </Heading>
              <Picture src="images/dancedetection.png" />
              <Paragraph textAlign="center">
                Wearable dance detection device which can detect a dance move
                being performed by the wearer of the device.
                <Paragraph>
                  Technologies/Stack: Arduino, Raspberry Pi, Python, Machine
                  Learning
                </Paragraph>
              </Paragraph>
              <Heading level="3" textAlign="center">
                CollegeZone
                <a href="https://github.com/fuadsahmawi/main">
                  <Button icon={<Github />} onClick={() => {}} />
                </a>
              </Heading>
              <Picture src="images/collegezone.jpeg" />
              <Paragraph textAlign="center">
                CollegeZone is an application designed for a Residential College
                4 (RC4) student to manage their contacts with other RC4
                students, manage their goals and to manage their time.
                <Paragraph>Technologies/Stack: Java, Travis CI/CD</Paragraph>
              </Paragraph>
              <Footer />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default Portfolio;
