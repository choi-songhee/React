import React from 'react';
import './contact.scss'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oyb1lle', 'template_p5rd66v', form.current, '8Epx12eGWWFAPvDTN')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()

  };

  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">Contact Me .</h2>
      <div className="container container--contact">
        <div className="contact__group">
          <article className="contact__option">
            <BiMailSend className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ssonghee15@gmail.com</h5>
            <a href="mailto:ssonghee15@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>010-2799-2720</h5>
            <a href="">Send a message</a>
          </article>
        </div>

        <form ref={form} className="form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" className="form__input" required />
          <input type="email" name="email" placeholder="Your Email" className="form__input" required />
          <textarea name="message" rows="10" placeholder="Your Message" className="form__textarea" required />
          <button type="submit" className="button button--send">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;
