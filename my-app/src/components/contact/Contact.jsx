import React from 'react';
import './contact.scss'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from "react";
import emailjs from 'emailjs-com'
import btnArrow from '../../assets/arrow-s.png'

const Contact = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_oyb1lle', 'template_p5rd66v', form.current, '8Epx12eGWWFAPvDTN')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });

  //   e.target.reset()

  // };

  return (
    <section id="contact" className="section contact">
      <div className="contact__wrap">
        <h2 className="contact__title">Contact <br/>Me</h2>
        <div className="contact__group">
          <p>
            항상 새로운 기술에 대한 관심과 배우고자 하는 마음으로 <br/>꾸준히 노력하며 준비하겠습니다.
          </p>
          <dl>
            <dt className="contact__detail">
              CONTACT DETAILS
            </dt>
            <dd>
              <a href="mailto:ssonghee15@gmail.com" target="_blank" className="contact__phone">ssonghee15@gmail.com</a>
              <a href="tel:01027992720" target="_blank" className="contact__email">+82 010 2799 2720</a>
            </dd>
          </dl>
          <a href="mailto:ssonghee15@gmail.com" target="_blank" className="contact__button">ssonghee15@gmail.com
            <img src={btnArrow} alt="mail" className="arrow-img"/>
          </a>
        
        </div>
      </div>
      <p className="copy-text">
        © 2022 Songhee Portfolio.<br/>
        All rights reserved.
      </p>
      
        
    </section>
  )
}

export default Contact;
