import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pb1l7e', 'service_0pb1l7e', form.current, 'dhw752QrgdydV7-wI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>njerijoan24@gmail.com</h5>
            <a href="mailto:njerijoan24@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Twitter</h4>
            <h5>DM on Twitter</h5>
            <a href="https://twitter.com/messages/compose?recipient_id=&ref_src=twsrc%5Etfw" class="twitter-dm-button" data-screen-name="joanndegwa" data-show-count="false" target="_blank">Message @joanndegwa</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </article>
          {/* <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>njerijoan24@gmail.com</h5>
            <a href="mailto:njerijoan24@gmail.com">Send a Message</a>
          </article> */}

        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name='message' rows='7' placeholder='Your Message' required> </textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact