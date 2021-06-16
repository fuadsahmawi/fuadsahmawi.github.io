import React, { useState, useEffect } from "react";
import { Grommet, Box, Heading, Paragraph, Image } from "grommet";
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

function Education() {
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
    const imgs = ["images/nus.png", "images/hanyang.png", "images/acjc.png"];
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
          <Box
            direction="row"
            flex
            overflow={{ horizontal: "hidden" }}
            animation="zoomIn"
          >
            <Box flex align="center" justify="start" pad="medium">
              <Heading level="2">Education</Heading>
              <Heading level="3" textAlign="center">
                National University of Singapore
              </Heading>
              <Image src="images/nus.png" />
              <Paragraph textAlign="center">
                <Paragraph>2016 - 2020</Paragraph>
                <Paragraph>
                  Bachelor of Engineering, Honours (Distinction), Computer
                  Engineering
                </Paragraph>
              </Paragraph>
              <Heading level="3" textAlign="center">
                Hanyang University
              </Heading>
              <Image src="images/hanyang.png" />
              <Paragraph textAlign="center">
                2019
                <Paragraph>Hanyang International Summer School</Paragraph>
              </Paragraph>
              <Heading level="3" textAlign="center">
                Anglo-Chinese Junior College
              </Heading>
              <Image src="images/acjc.png" />
              <Paragraph textAlign="center">
                2012 - 2013
                <Paragraph>GCE A Levels, Science</Paragraph>
              </Paragraph>
              <Footer />
            </Box>
          </Box>
        </Box>
      </Grommet>
    );
  }
}

export default Education;
