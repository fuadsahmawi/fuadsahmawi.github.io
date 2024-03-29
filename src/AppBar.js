import React from "react";
import { Box, Button, Header, Text } from "grommet";
import { Home, Contact, Projects, Code } from "grommet-icons";
import { Link, useLocation } from "react-router-dom";

function AppBar() {
  const location = useLocation();

  function active(pathname) {
    if (pathname === location.pathname) {
      return true;
    }
  }

  return (
    <Header background="brand">
      <Box
        direction="row"
        pad={{ left: "medium" }}
        align="center"
        animation="pulse"
      >
        <Text>fuadsahmawi</Text>
      </Box>
      <Box
        direction="row"
        pad={{ right: "medium", left: "small", vertical: "small" }}
      >
        <Link to="/">
          <Button icon={<Home />} active={active("/")} />
        </Link>
        <Link to="/skills">
          <Button icon={<Code />} active={active("/skills")} />
        </Link>
        <Link to="/portfolio">
          <Button icon={<Projects />} active={active("/portfolio")} />
        </Link>
        <Link to="/contact">
          <Button icon={<Contact />} active={active("/contact")} />
        </Link>
      </Box>
    </Header>
  );
}

export default AppBar;
