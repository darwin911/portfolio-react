import React from 'react';
import { Form } from 'semantic-ui-react';

export const Contact = () => {
  return (
    <section className='contact'>
      <h2 className='contact__heading'>Contact</h2>
      <p className='contact__description'>
        This is here mostly to showcase the ability to style form inputs, and
        adding the relevent functionality to a form (Send data to someone
        through inputs)
      </p>
      <form className='contact__form'>
        <input type='text' placeholder='Name' className='contact__name' />
        <input type='text' placeholder='Email' className='contact__email' />
        <textarea
          name='message'
          id='message'
          cols={30}
          rows={10}
          placeholder='Message'
          className='contact__message'></textarea>
        <button className='contact__submit'>Send!</button>
      </form>
    </section>
  );
};
