import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { styles } from './styles';

export const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    fetch('http://localhost:3002/send', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success') {
          alert('Message Sent!');
          setName('');
          setEmail('');
          setMessage('');
        } else if (res.status === 'fail') {
          alert('Message failed to send.');
        }
      });
  };

  return (
    <section id='contact' className='contact' style={styles.Section}>
      <Container maxWidth='sm'>
        <Typography variant='h1' component='h2' style={styles.SectionHeading}>
          Contact
        </Typography>
        <Typography className='contact__description'>
          This is here mostly to showcase the ability to style form inputs, and
          adding the relevent functionality to a form. It works, try it!
        </Typography>
        <form onSubmit={handleSubmit} style={styles.ContactForm}>
          <TextField
            label='Name'
            placeholder='Your Name'
            margin='normal'
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextField
            type='email'
            label='Email'
            placeholder='name@email.com'
            required
            margin='normal'
            fullWidth
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <TextField
            label='Message'
            placeholder='You are so talented! Send over your Resume ASAP.'
            multiline
            margin='normal'
            fullWidth
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <Button
            variant='contained'
            color='inherit'
            endIcon={<SendIcon />}
            type='submit'>
            Send
          </Button>
        </form>
      </Container>
    </section>
  );
};
