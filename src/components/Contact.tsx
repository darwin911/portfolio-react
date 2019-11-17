import React from 'react';
import { Form, Input, Button, TextArea } from 'semantic-ui-react';

export const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact__container'>
        <h2 className='contact__heading'>Contact</h2>
        <p className='contact__description'>
          This is here mostly to showcase the ability to style form inputs, and
          adding the relevent functionality to a form (Send data to someone
          through inputs)
        </p>
        <Form className='contact__form'>
          <Form.Field>
            <Input type='text' placeholder='Name' className='contact__name' />
          </Form.Field>
          <Form.Field>
            <Input type='text' placeholder='Email' className='contact__email' />
          </Form.Field>
          <Form.Field>
            <TextArea
              name='message'
              id='message'
              cols={30}
              rows={10}
              placeholder='Message'
              className='contact__message'></TextArea>
          </Form.Field>
          <Button color='blue' className='contact__submit'>
            Send!
          </Button>
        </Form>
      </div>
    </section>
  );
};
