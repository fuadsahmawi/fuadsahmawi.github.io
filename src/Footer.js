import React from 'react';
import { Box, Text, Anchor, Button } from 'grommet';
import { Linkedin, Github, MailOption } from 'grommet-icons';

function Footer() {
    return (
        <Box pad="medium">
            <Text textAlign="center">
            © 2021, Developed and Designed by Fuad using <Anchor href="https://v2.grommet.io/" label="Grommet" />.
            </Text>
            <Text textAlign="center">
                <Anchor href="http://www.linkedin.com/in/fuad-sahmawi/">
                    <Button icon={<Linkedin />} onClick={() => {}} />
                </Anchor>
                <Anchor href="https://github.com/fuadsahmawi">
                    <Button icon={<Github />} onClick={() => {}} />
                </Anchor>
                <Anchor href="mailto:fuadsahmawi@gmail.com">
                    <Button icon={<MailOption />} onClick={() => {}} />
                </Anchor>
            </Text>
    </Box>
    );
};

export default Footer;