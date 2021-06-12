import React from "react";
import { Box, Heading, Grommet } from "grommet";
import SkillBar from "react-skillbars";
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

const languages = [
  { type: "Java", level: 80 },
  { type: "JavaScript", level: 75 },
  { type: "SQL", level: 70 },
];

const frameworks = [
  { type: "Spring", level: 75 },
  { type: "Angular", level: 65 },
  { type: "React", level: 60 },
];

const colours = {
  bar: {
    hue: 125,
    saturation: 50,
    level: {
      minimum: 65,
      maximum: 100,
    },
  },
  title: {
    text: "#fff",
    background: "#116466",
  },
};

function Skills() {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar />
        <Box align="center" animation="zoomIn" pad="medium">
          <Heading textAlign="center" level="2">
            Tech Stack
          </Heading>
        </Box>
        <Box align="center" animation="zoomIn">
          <Heading level="3">Languages</Heading>
        </Box>
        <Box justify="start" pad="medium" animation="fadeIn">
          <SkillBar skills={languages} colors={colours} />
        </Box>
        <Box align="center" animation="zoomIn">
          <Heading level="3">Frameworks</Heading>
        </Box>
        <Box justify="start" pad="medium" animation="fadeIn">
          <SkillBar skills={frameworks} colors={colours} />
        </Box>
        <Footer />
      </Box>
    </Grommet>
  );
}

export default Skills;
