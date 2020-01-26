import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { styles } from './styles';

export const Contact: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form: HTMLFormElement = ev.target as HTMLFormElement;
    const data: FormData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setStatus('SUCCESS');
        resetForm();
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
    console.log('STATUS:', status);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
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
        <form
          action='https://formspree.io/darwinpsmith@gmail.com'
          method='POST'
          onSubmit={handleSubmit}
          style={styles.ContactForm}>
          <TextField
            name='name'
            label='Name'
            placeholder='Your Name'
            margin='normal'
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <TextField
            name='email'
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
            name='message'
            label='Message'
            placeholder='I would like to hear more about your work and experience. Send over your resume ASAP!'
            multiline
            margin='normal'
            fullWidth
            value={message}
            onChange={e => setMessage(e.target.value)}
          />

          <Button
            disabled={!email || !message}
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
