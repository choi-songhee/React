import React from 'react';
import './about.scss'
import { FaCode } from 'react-icons/fa'
import { BiDevices } from 'react-icons/bi'
import { FaVuejs } from 'react-icons/fa'
import { FaPeopleArrows } from 'react-icons/fa'

const About = () => {
  // tool lists
  const tools = ['HTML5', 'SCSS', 'CSS3', 'Vue.js', 'React.js', 'Javascript ES6', 'Npm', 'Git', 'Jira', 'Jeplin'];
  const toolLists = tools.map((value, key) => <li key={key} className="tool__list">{value}</li>);

  // skill lists
  const skillLists = [
    {
      id: '0',
      icon: FaCode,
      title: 'UI DEVELOPER',
      desc: 'HTML, CSS, JS를 잘 다룰 수 있습니다.\nSCSS 문법과 BEM 방법론을 익숙하게 사용할 수 있습니다. \n크로스브라우징을 고려하여 작업하려 노력합니다. \n시맨틱한 마크업 구조를 작성하기 위해 노력합니다.\n사용자를 고려한 웹 표준을 준수하고 유지보수를 고려한 코드를 사용하기 위해 노력합니다.'
    },
    {
      id: '1',
      icon: FaVuejs,
      title: 'FRAMEWORK',
      desc: 'Vue lifecycle hooks을 이해 및 활용합니다. \n컴포넌트의 개념과 중요성에 대해 잘 알고 있으며, 재활용성을 고려하여 컴포넌트를 설계하려 노력합니다. \nvue와 react의 문법을 잘 숙지하고 있으며 이를 활용한 화면 구현이 가능합니다.\nwebpack, babel, gulp 등의 태스크러너 및 번들러 사용 경험이 있습니다.'
    },
    {
      id: '2',
      icon: BiDevices,
      title: 'RESPONSIVE',
      desc: '미디어쿼리를 활용한 반응형 레이아웃을 이해 및 구현합니다. \n다양한 형태의 웹사이트와 모바일 웹, 반응형 웹 구축 경험을 가지고 있습니다.'
    },
    {
      id: '3',
      icon: FaPeopleArrows,
      title: 'COOPERATION',
      desc: 'Git, Jira, 슬랙, 재플린을 이용하여 기획, 디자인, 개발 등의 다른 분야의 담당자들과 원활하게 소통하고 협업하려 노력합니다.'
    }
  ]



  return (
    <section id="about" className="section section--about">
      <div className="container">
      <h1 className="section__title">About Me .</h1>
      <p className="section__desc">
        안녕하세요 4년차 웹 프론트엔드 개발자 최송희입니다.<br/>
        항상 새로운 기술에 대한 관심과 배우고자 하는 꾸준한 노력을 바탕으로 
        깔끔하고 직관적인 코드를 작성하며,<br/>
        동료들에게는 함께 일하고 싶고 함께 성장할 수 있는 좋은 사이로,<br/>
        사용자에게는 <span className="c-green">신선한 서비스 경험을 제공하는 FE 개발자</span>를 목표로 합니다. 
      </p>
      <h1 className="section__title">Skills & Tools .</h1>
      <div className="section__inner">
        <ul className="tool">
          {toolLists}
        </ul>
        <ul className="skill">
          {skillLists.map(list => (
            <li key={list.id} className="skill__detail">
              <div className="skill__icon">
                <list.icon />
              </div>
              <strong className="skill__title">
                {list.title}
              </strong>
              <p className="skill__desc">
                {list.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  )
}

export default About;
