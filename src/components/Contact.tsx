import React from 'react';
import {
  FormControl,
  TextField,
  Button,
  Typography,
  Container
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const styles = {
  Section: {
    padding: '4rem 0'
  },
  SectionHeading: {
    marginBottom: '4rem',
    fontWeight: 700
  },
  ContactForm: {
    width: '100%',
    margin: '1rem 0'
  }
};

export const Contact: React.FC = () => {
  return (
    <section id='contact' className='contact' style={styles.Section}>
      <Container maxWidth='sm'>
        <Typography variant='h2' style={styles.SectionHeading}>
          Contact
        </Typography>
        <Typography className='contact__description'>
          This is here mostly to showcase the ability to style form inputs, and
          adding the relevent functionality to a form. It works, try it!
        </Typography>
        <FormControl style={styles.ContactForm}>
          <TextField label='Name' placeholder='Your Name' margin='normal' />
          <TextField
            type='email'
            label='Email'
            placeholder='name@email.com'
            required
            margin='normal'
          />
          <TextField
            label='Message'
            placeholder='You are so talented! Send over your Resume ASAP.'
            multiline
            margin='normal'
          />
          <Button variant='contained' color='inherit' endIcon={<SendIcon />}>
            Send
          </Button>
        </FormControl>
      </Container>
    </section>
  );
};
