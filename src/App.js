import React from "react";
import { Box, Heading, Grommet, Image, Paragraph, Anchor } from "grommet";
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

function App() {
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
            <Heading textAlign="center" level="2">
              Hello, I'm Fuad, a Software Engineer.
            </Heading>
            <Image src="images/displaypic.png" />
            <Heading level="3">About</Heading>
            <Paragraph textAlign="center">
              I'm a Technology Enthusiast who would love to contribute to a
              collective that values collaboration and diversity in the pursuit
              of success.
            </Paragraph>
            <Paragraph textAlign="center">
              I graduated from the National University of Singapore (NUS) in
              2020 with a Bachelor of Engineering (Hons) in Computer
              Engineering.
            </Paragraph>
            <Paragraph textAlign="center">
              I am currently working in DBS as a Software Development Specialist
              in the Blockchain and Distributed Ledger Technology team.
            </Paragraph>
            <Paragraph textAlign="center">
              Aside from work, I'm a football junkie, and also play floorball in
              my free time.
            </Paragraph>
            <Paragraph>
              Click to view my{" "}
              <Anchor
                href="https://fuadsahmawi.github.io/education"
                label="educational"
              />{" "}
              or{" "}
              <Anchor
                href="https://fuadsahmawi.github.io/career"
                label="career"
              />{" "}
              background.
            </Paragraph>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
}

export default App;
