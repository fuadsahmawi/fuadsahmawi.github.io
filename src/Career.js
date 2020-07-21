import React from 'react';
import { Grommet, Box, Heading, Grid, Paragraph, Image } from 'grommet';
import AppBar from './AppBar.js';

const theme = {
  global: {
    colors: {
      brand: '#116466',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function Career() {
	return (
    <Grommet theme={theme} full>
      <Box fill >
      <AppBar />
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='start' pad='medium'>
                    <Heading level='2'>Career</Heading>
                    <Grid
                      rows={['xxsmall', 'small']}
                      columns={['small', 'medium']}
                      gap="large"
                      areas={[
                        { name: 'nav', start: [0, 0], end: [0, 1] },
                        { name: 'heading', start: [0, 0], end: [1, 0] },
                        { name: 'main', start: [1, 1], end: [1, 1] },
                      ]}
                    >
                      <Image gridArea="nav" src="images/dbs.jpeg" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                        DBS Bank
                      </Heading>
                      <Paragraph gridArea="main">
                        August 2020 - Current
                        <Paragraph>
                          Technology Executive (SEED)
                        </Paragraph>
                        <Paragraph>
                          Relevant Skills
                          <li> Financial Technology </li>
                          <li> Software Development </li>
                        </Paragraph>
                      </Paragraph>
                    </Grid>
                    <Grid
                      rows={['xxsmall', 'small']}
                      columns={['small', 'medium']}
                      gap="large"
                      areas={[
                        { name: 'nav', start: [0, 0], end: [0, 1] },
                        { name: 'heading', start: [0, 0], end: [1, 0] },
                        { name: 'main', start: [1, 1], end: [1, 1] },
                      ]}
                    >
                      <Image gridArea="nav" src="images/rolls-royce.png" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                        Rolls-Royce (Internship)
                      </Heading>
                      <Paragraph gridArea="main">
                        January 2019 - June 2019
                        <Paragraph>
                          IoT Technologist
                        </Paragraph>
                        <Paragraph>
                          Relevant Skills
                          <li> Internet of Things </li>
                          <li> Software Development </li>
                        </Paragraph>
                      </Paragraph>
                    </Grid>
                    <Grid
                      rows={['xxsmall', 'small']}
                      columns={['small', 'medium']}
                      gap="large"
                      areas={[
                        { name: 'nav', start: [0, 0], end: [0, 1] },
                        { name: 'heading', start: [0, 0], end: [1, 0] },
                        { name: 'main', start: [1, 1], end: [1, 1] },
                      ]}
                    >
                      <Image gridArea="nav" src="images/saf.png" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                        Singapore Armed Forces (National Service)
                      </Heading>
                      <Paragraph gridArea="main">
                        May 2014 - March 2016
                        <Paragraph>
                          Specialist Cadet, Guard Commander, Force Sergeant
                        </Paragraph>
                        <Paragraph>
                          Relevant Skills
                          <li> Leadership </li>
                          <li> Collaboration </li>
                        </Paragraph>
                      </Paragraph>
                    </Grid>
                </Box>  
              </Box>
      </Box>
    </Grommet>
	);
}

export default Career;