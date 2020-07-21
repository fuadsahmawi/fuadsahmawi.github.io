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

function Education() {
	return (
    <Grommet theme={theme} full>
      <Box fill>
      <AppBar />
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='start' pad='medium'>
                    <Heading level='2'>Education</Heading>
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
                      <Image src="images/nus.png" fill="true" fit="contain" gridArea="nav"/>
                      <Heading level='3' textAlign="center" gridArea="heading">
                        National University of Singapore
                      </Heading>
                      <Paragraph gridArea="main" >
                        2016 - 2020
                        <Paragraph>
                          Bachelor of Engineering, Honours (Distinction), Computer Engineering
                        </Paragraph>
                        <Paragraph>
                          Relevant Coursework
                          <li> Software Engineering </li>
                          <li> Database Systems </li>
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
                      <Image gridArea="nav" src="images/hanyang.png" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                        Hanyang University
                      </Heading>
                      <Paragraph gridArea="main">
                        2019
                        <Paragraph>
                          Hanyang International Summer School
                        </Paragraph>
                        <Paragraph>
                          Relevant Coursework
                          <li> Microprocessor and Internet of Things </li>
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
                      <Image gridArea="nav" src="images/acjc.png" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                        Anglo-Chinese Junior College
                      </Heading>
                      <Paragraph gridArea="main">
                        2012-2013
                        <Paragraph>
                          GCE A Levels, Science
                        </Paragraph>
                        <Paragraph>
                          Relevant Coursework
                          <li> Physics </li>
                          <li> Mathematics </li>
                        </Paragraph>                     
                      </Paragraph>
                    </Grid>
                </Box>  
              </Box>
      </Box>
    </Grommet>
	);
}

export default Education;