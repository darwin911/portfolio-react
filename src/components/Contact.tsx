import { Button, Container, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { ValidationError, useForm } from "@formspree/react";

import SendIcon from "@material-ui/icons/Send";
import { styles } from "./styles";

export const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mnvnpjrm");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  React.useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [state]);

  return (
    <section id="contact" className="contact" style={styles.Section}>
      <Container maxWidth="sm">
        <Typography variant="h1" component="h2" style={styles.SectionHeading}>
          Contact
        </Typography>
        <Typography className="contact__description">
          This is here mostly to showcase the ability to style form inputs, and
          adding the relevent functionality to a form. It works, try it!
        </Typography>
        <form onSubmit={handleSubmit} style={styles.ContactForm} noValidate>
          <TextField
            name="name"
            label="Name"
            placeholder="Your Name"
            margin="normal"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={state.submitting}
          />

          <TextField
            name="email"
            type="email"
            label="Email"
            placeholder="name@email.com"
            required
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={state.submitting}
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <TextField
            name="message"
            label="Message"
            placeholder="I would like to hear more about your work and experience. Send over your resume ASAP!"
            multiline
            margin="normal"
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={state.submitting}
          />

          <Button
            disabled={!email || !message || state.succeeded}
            variant="contained"
            color="inherit"
            endIcon={<SendIcon />}
            type="submit"
          >
            Send
          </Button>
        </form>
        {state.succeeded && <p>Thank you for submitting!</p>}
      </Container>
    </section>
  );
};
