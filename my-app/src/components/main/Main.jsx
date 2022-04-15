import React from 'react';
import './main.scss'
import CTA from './CTA'
import SNS from './SNS'
import profile from '../../assets/me.png'

const Main = () => {
  return (
    <section className="section main">
      <div className="container container--main">
        <h5>Hello I'm</h5>
        <h1>songhee Choi</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <SNS />

        <div className="profile">
          <img src={profile} alt="me"/>
        </div>

        <a href="#contact" className="scroll-down">Scroll Down</a>

      </div>
    </section>
  )
}


export default Main;


