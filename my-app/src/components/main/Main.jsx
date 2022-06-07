import React from 'react';
import './main.scss'
import CTA from './CTA'
import SNS from './SNS'
// import profile from '../../assets/me.png'

const Main = () => {
  return (
    <section className="section main">
      <div className="container container--main">
        <CTA />
        <SNS />

        <div className="profile">
          {/* <img src={profile} alt="me"/> */}
          
        </div>
        <div className="profile-text">
          <h1 className="left">CHOI<br />
          SONG HEE</h1>
          <h1 className="right">FRONTEND</h1>
        </div>


      </div>
    </section>
  )
}


export default Main;


