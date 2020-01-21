import React from 'react';
import {
  FormControl,
  TextField,
  Button,
  Typography,
  Container
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export const Contact = () => {
  return (
    <section className='contact'>
      <Container maxWidth='sm'>
        <Typography variant='h2'>Contact</Typography>
        <Typography className='contact__description'>
          This is here mostly to showcase the ability to style form inputs, and
          adding the relevent functionality to a form. It works, try it!
        </Typography>
        <FormControl className='contact__form'>
          <TextField label='Name' margin='normal' />
          <TextField type='email' label='Email' required margin='normal' />
          <TextField label='Message' multiline margin='normal' />
          <Button variant='contained' color='inherit' endIcon={<SendIcon />}>
            Send
          </Button>
        </FormControl>
      </Container>
    </section>
  );
};
