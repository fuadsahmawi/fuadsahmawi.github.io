import React from "react";
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

function Career() {
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
            <Heading level="2">Career</Heading>
            <Heading level="3" textAlign="center">
              DBS Bank
            </Heading>
            <Image src="images/dbs.jpeg" />
            <Paragraph textAlign="center">
              August 2020 - Current
              <Paragraph>Software Development Specialist</Paragraph>
            </Paragraph>
            <Heading level="3" textAlign="center">
              Rolls-Royce (Internship)
            </Heading>
            <Image src="images/rolls-royce.png" />
            <Paragraph textAlign="center">
              January 2019 - June 2019
              <Paragraph>IoT Technologist</Paragraph>
            </Paragraph>
            <Heading level="3" textAlign="center">
              Singapore Armed Forces (National Service)
            </Heading>
            <Image src="images/saf.png" />
            <Paragraph textAlign="center">
              May 2014 - March 2016
              <Paragraph>Force Sergeant</Paragraph>
            </Paragraph>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default Career;
