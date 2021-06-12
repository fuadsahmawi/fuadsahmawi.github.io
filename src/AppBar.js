import React from "react";
import { Box, Button, Header, Avatar } from "grommet";
import { Home, Book, Contact, Projects, Briefcase } from "grommet-icons";
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
      <Box direction="row" pad={{ left: "medium" }} align="center">
        <Avatar src="images/displaypic.png" />
      </Box>
      <Box
        direction="row"
        pad={{ right: "medium", left: "small", vertical: "small" }}
      >
        <Link to="/">
          <Button icon={<Home />} active={active("/")} />
        </Link>
        <Link to="/education">
          <Button icon={<Book />} active={active("/education")} />
        </Link>
        <Link to="/career">
          <Button icon={<Briefcase />} active={active("/career")} />
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
