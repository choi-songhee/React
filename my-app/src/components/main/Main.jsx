import React from 'react';
import { useRef, useEffect, useState } from "react";
import './main.scss'
import CTA from './CTA'
import SNS from './SNS'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  const startTrigger = useRef(null);

  const text1 = useRef(null);
  const text2 = useRef(null);

  useEffect(() => {
    const config = {
      scrollTrigger: {
        trigger: startTrigger.current,
        start: "top top",
        toggleActions: "play play play play",
        scrub: 1,
      },
      x: 1500,
      duration: 1,
    };

    gsap.to(text1.current, config);
    gsap.to(text2.current, {
      ...config,
      x: -1500,
    });
  }, []);

  // const [isShown, setIsShown] = useState(true);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (innerHeight < pageYOffset) setIsShown(false);
  //     else setIsShown(true);
  //   });
  // }, []);

  return (
    <section className="section main" ref={startTrigger}>
      <CTA />
      <SNS />
      <div className="container container--main">
        <div className="profile">
          {/* <img src={profile} alt="me"/> */}
          <div className="profile__bg"></div>
        </div>
        <div className="profile-text">
          <h1 className="left" ref={text1}>CHOI<br />
          SONG HEE</h1>
          <h1 className="right" ref={text2}>FRONTEND</h1>
        </div>


      </div>
    </section>
  )
}


export default Main;


