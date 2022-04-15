import React from 'react';
import './works.scss'

const Works = () => {
  return (
    <section id="works" className="section">
      <h5 className="section__sub-title">My Recent Work</h5>
      <h2 className="section__title">Portfolio</h2>
      <div className="container works">
        <article className="works__item">
          <div className="works__item-image"></div>
          <h3 className="works__item-title">works title</h3>
          <strong>기간</strong>
          <strong>사용기술</strong>
        </article>
      </div>
    </section>
  )
}

export default Works;


