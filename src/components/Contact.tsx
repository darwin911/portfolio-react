import React from 'react';

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
        <form className='contact__form'>
          <fieldset>
            <input type='text' placeholder='Name' className='contact__name' />
          </fieldset>
          <fieldset>
            <input type='text' placeholder='Email' className='contact__email' />
          </fieldset>
          <fieldset>
            <textarea
              name='message'
              id='message'
              cols={30}
              rows={10}
              placeholder='Message'
              className='contact__message'
            />
          </fieldset>
          <button color='blue' className='contact__submit'>
            Send!
          </button>
        </form>
      </div>
    </section>
  );
};
