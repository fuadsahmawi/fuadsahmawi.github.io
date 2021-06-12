import React, { useState } from "react";
import {
  Grommet,
  Box,
  Heading,
  Button,
  Form,
  FormField,
  TextInput,
  TextArea,
} from "grommet";
import AppBar from "./AppBar.js";
import emailjs from "emailjs-com";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import { NotificationManager } from "react-notifications";
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

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    var template_params = {
      name: name,
      email: email,
      message: message,
    };

    var service_id = "gmail";
    var template_id = "template_qYNHHWHR";
    var user_id = "user_eEk5QD5Kvw0qvB6ch7Qss";
    emailjs.send(service_id, template_id, template_params, user_id);
    NotificationManager.success("Message Sent", "Successful", 2000);
  }

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar />
        <Box direction="column" flex overflow={{ horizontal: "hidden" }}>
          <Box
            flex
            align="center"
            justify="start"
            pad="medium"
            animation="zoomIn"
          >
            <Heading level="2">Contact Me</Heading>
            <Heading level="3"> Have a question? Let's connect! </Heading>
            <Box align="center" pad="small">
              <Form>
                <FormField label="Name">
                  <TextInput
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormField>
                <FormField label="Email Address">
                  <TextInput
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormField>
                <FormField label="Message">
                  <TextArea
                    placeholder="Your Message"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </FormField>
                <Box direction="row" justify="center" gap="medium" pad="small">
                  <Button
                    type="submit"
                    primary
                    label="Submit"
                    onClick={handleSubmit}
                  />
                </Box>
              </Form>
              <Footer />
            </Box>
          </Box>
        </Box>
      </Box>
      <NotificationContainer />
    </Grommet>
  );
}

export default Contact;
