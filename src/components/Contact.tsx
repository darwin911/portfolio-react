import React from 'react';

const Contact = () => {
  return (
    <section className='contact'>
      <h2>Contact</h2>
      <form>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Email' />
        <textarea
          name='message'
          id='message'
          cols='30'
          rows='10'
          placeholder='Message'></textarea>
      </form>
    </section>
  );
};

export default Contact;
