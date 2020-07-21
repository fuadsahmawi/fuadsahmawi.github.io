import React from 'react';
import { Box, Button, Header, Avatar } from 'grommet';
import { Home, Book, Contact, Projects, Briefcase } from 'grommet-icons';
import { Link } from "react-router-dom";

function AppBar() {
	return (
        <Header background="brand">
          <Box direction="row" pad={{left: 'medium'}} align='center'>
            <Avatar src="images/displaypic.png" />
          </Box>
          <Box direction = 'row' pad={{ right: 'medium', left: 'small', vertical: 'small' }}>
            <Link to="/">
              <Button icon={<Home />} />
            </Link>
            <Link to="/education">
              <Button icon={<Book />}/>
            </Link>
            <Link to="/career">
              <Button icon={<Briefcase />}/>
            </Link>
            <Link to="/portfolio">
              <Button icon={<Projects />} />
            </Link>
            <Link to="/contact">
              <Button icon={<Contact />} />
            </Link>
          </Box>
        </Header>
    );
};

export default AppBar;