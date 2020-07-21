import React from 'react';
import { Grommet, Box, Heading, Grid, Paragraph, Button, Image } from 'grommet';
import { Github, Domain } from 'grommet-icons';
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

function Portfolio() {
	return (
    <Grommet theme={theme} full>
      <Box fill>
      <AppBar />
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='start' pad='medium'>
                    <Heading level='2'>Portfolio</Heading>
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
                      <Image gridArea="nav" src="images/website.png" fill="true" fit="contain" />
                      <Heading level='3' gridArea="heading" textAlign="center">
                      Portfolio Web Application
                        <a href="https://github.com/fuadsahmawi/fuadsahmawi.github.io">
                          <Button icon={<Github />} onClick={() => {}} />
                        </a>
                        <a href="https://fuadsahmawi.github.io">
                          <Button icon={<Domain />} onClick={() => {}} />
                        </a>
                      </Heading>
                      <Paragraph gridArea="main">
                          My own portfolio reactive web application which showcases my skills and projects that I've completed thus far.
                        <Paragraph>
                          Technologies/Stack: React.js, JavaScript, Express, HTML, Node.js
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
                      <Image gridArea="nav" src="images/mobilevitalsigns.png" fill="true" fit="contain" />
                      <Heading level='3' gridArea="heading" textAlign="center">
                      Mobile Vital Signs Monitoring System
                      </Heading>
                      <Paragraph gridArea="main">
                        System which incorporates bluetooth-enabled vital signs sensors communicating with microcontrollers which transfers data to a server, all done wirelessly.
                        <Paragraph>
                          Technologies/Stack: CoffeeScript, Python, Elasticsearch, Logstash, Kibana, ZeroMQ
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
                      <Image gridArea="nav" src="images/hungryvery.png" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                        HungryVery
                        <a href="https://github.com/dalsontws/CS2102FoodDeliverySystem">
                          <Button icon={<Github />} onClick={() => {}} />
                        </a>
                      </Heading>
                      <Paragraph gridArea="main">
                        Full-Stack Web Application. Food Delivery Service.
                        <Paragraph>
                          Technologies/Stack: PostgreSQL, Express.js, React.js, Node.js, JavaScript, HTML, CSS, SQL
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
                      <Image gridArea="nav" src="images/dancedetection.png" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                      Dance Detection
                      </Heading>
                      <Paragraph gridArea="main">
                      Wearable dance detection device which can detect a dance move being performed by the wearer of the device.
                        <Paragraph>
                          Technologies/Stack: Arduino, Raspberry Pi, Python, Machine Learning
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
                      <Image gridArea="nav" src="images/collegezone.jpeg" fill="true" fit="contain"/>
                      <Heading level='3' gridArea="heading" textAlign="center">
                      CollegeZone
                        <a href="https://github.com/fuadsahmawi/main">
                          <Button icon={<Github />} onClick={() => {}} />
                        </a>
                      </Heading>
                      <Paragraph gridArea="main">
                      CollegeZone is an application designed for a Residential College 4 (RC4) student to manage their contacts with other RC4 students, manage their goals and to manage their time.
                        <Paragraph>
                          Technologies/Stack: Java, Travis CI/CD
                        </Paragraph>
                      </Paragraph>
                    </Grid>
                </Box>  
              </Box>
      </Box>
    </Grommet>
	);
}

export default Portfolio;