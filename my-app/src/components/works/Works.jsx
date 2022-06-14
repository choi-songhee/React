import React from 'react';
import './works.scss'
import pj01 from '../../assets/pj_01.jpg'
import pj02 from '../../assets/pj_02.png'
import pj03 from '../../assets/pj_03.svg'
import pj04 from '../../assets/pj_04.png'
import pj05 from '../../assets/pj_05.png'
import pj06 from '../../assets/pj_06.png'
import pj07 from '../../assets/pj_07.png'
import pj08 from '../../assets/pj_08.png'
import pj09 from '../../assets/pj_09.png'
import pj10 from '../../assets/pj_10.png'
import pj11 from '../../assets/pj_11.png'
import pj12 from '../../assets/pj_12.png'

const Works = () => {
   // project lists
   const projectLists = [
    {
      id: '0',
      image: pj01,
      url: 'https://lghomin.com/',
      title: 'LG HOMIN 운영 프로젝트',
      period: '2022.01 - 2022.04',
      desc: 'LG HOMIN 앱/웹의 기본적인 유지보수와 다양한 기획 요구에 맞는 UI 개선 및 이슈처리를 진행하였습니다.',
      tech: ['Vue.js', 'Html', 'Scss', 'Javascript', 'Git', 'Jira', 'Zeplin']
    },
    {
      id: '1',
      image: pj02,
      url: 'https://puzzle.geovision.co.kr/',
      title: 'SKT Puzzle 구축 프로젝트',
      period: '2021.10 - 2021.12',
      desc: 'SK open api 플랫폼으로 react.js를 기반으로 하여 모바일, PC, 반응형으로 구축 작업을 진행하였습니다.',
      tech: ['React.js', 'Html', 'Scss', 'Javascript', 'Git', 'Zeplin']
    },
    {
      id: '2',
      image: pj03,
      url: '#',
      isShow: false,
      title: '삼성 SDS 인적자원 Visibility 내부 서비스 구축 프로젝트',
      period: '2021.07 - 2021.09',
      desc: 'Vue.js를 기반으로 한 삼성 SDS 인적자원 내부 서비스 구축 작업을 진행하였습니다.',
      tech: ['Vue.js', 'Html', 'Scss', 'Javascript', 'Git', 'Jira', 'Jenkins', 'Zeplin']
    },
    {
      id: '3',
      image: pj04,
      url: 'https://www.lge.co.kr/',
      title: 'LG 전자 플랫폼 운영 프로젝트',
      period: '2021.06 - 2021.07',
      desc: 'LG 전자 플랫폼 운영 프로젝트로 유지보수 업무와 기획 요구에 따른 UI 개선 작업을 진행하였습니다.',
      tech: ['Html', 'Scss', 'Javascript', 'Git', 'Jira', 'Jquery', 'Zeplin']
    },
    {
      id: '4',
      image: pj05,
      url: '#',
      isShow: false,
      title: '삼성카드 약관 개선 프로젝트',
      period: '2021.04 - 2021.05',
      desc: '삼성카드 약관 개선 프로젝트에 퍼블리싱 작업을 진행하였습니다.',
      tech: ['Html', 'Css', 'Javascript', 'Svn']
    },
    {
      id: '5',
      image: pj06,
      url: 'https://shangpree.com/',
      title: 'SHANGPREE 다국어 웹사이트 구축',
      period: '2021.01 - 2021.04',
      desc: 'SHANGPREE 브랜드 소개 웹사이트로 한국어, 영어, 중국어를 지원하는 다국어 웹사이트를 구축하였습니다.',
      tech: ['Nuxt.js', 'Html', 'Javascript', 'Scss', 'Git', 'Trello']
    },
    {
      id: '6',
      image: pj08,
      url: 'https://www.lotteon.com/p/display/main/lotteon?mall_no=1',
      title: '롯데 ON 운영 프로젝트',
      period: '2020.05 - 2020.12',
      desc: '롯데 ON 앱/웹의 기본적인 유지보수를 비롯해 다양한 기획 요구에 맞는 새로운 기능과 UI 개편 작업을 하였습니다.',
      tech: ['Vue.js', 'Html', 'Javascript', 'Scss', 'Git', 'Jira', 'Zeplin']
    },
    {
      id: '7',
      image: pj07,
      url: 'https://www.lotteon.com/p/display/main/ellotte?mall_no=2',
      title: '롯데 ON 통합 구축 프로젝트',
      period: '2019.11 - 2020.04',
      desc: 'Vue.js를 기반으로 하여 롯데 프리미엄몰(현재 롯데백화점으로 변경) 구축 작업을 진행하였습니다.',
      tech: ['Vue.js', 'Html', 'Javascript', 'Scss', 'Git', 'Jira', 'Zeplin']
    },
    {
      id: '8',
      image: pj09,
      url: 'http://www.365mc.co.kr/landing/Y18/D1218_dg.php',
      title: '비만 365mc 대구지사 웹사이트 구축 프로젝트',
      period: '2019.10 - 2019.11',
      desc: '비만 365mc 대구지사 소개 웹사이트로 웹표준 및 웹 접근성, 크로스브라우징을 고려한 반응형 퍼블리싱 구축 작업을 진행하였습니다.',
      tech: ['Html', 'Javascript', 'Scss']
    },
    {
      id: '9',
      image: pj10,
      url: 'https://www.junsungki.com/',
      title: '라이나생명 전성기 영상명함 구축',
      period: '2019.09 - 2019.10',
      desc: '라이나 생명 전성기 영상명함에 적용될 템플릿을 디자인 가이드에 맞춰 퍼블리싱하는 작업을 진행하였습니다.',
      tech: ['Nuxt.js', 'Html', 'Javascript', 'Css']
    },
    {
      id: '10',
      image: pj11,
      url: 'http://xn--6800-fy4p78mhpg3mv.com/',
      title: '남도복국 웹사이트 구축',
      period: '2019.04 - 2019.07',
      desc: '웹/모바일/반응형에 맞게 html, css 및 간단한 스크립트 작업을 진행하였습니다.',
      tech: ['Html', 'Javascript', 'Css']
    },
    {
      id: '11',
      image: pj12,
      url: 'http://www.pacific-amc.com/',
      title: '퍼시픽자산운용 웹사이트 구축',
      period: '2019.04 - 2019.07',
      desc: '웹/모바일/반응형에 맞게 html, css 및 간단한 스크립트 작업을 진행하였습니다.',
      tech: ['Html', 'Javascript', 'Css']
    }
  ]

  return (
    <section id="works" className="section section--works bg-white">
      <div className="carrer">
        <h5 className="carrer__title">TIMELINE</h5>
        <ul className="carrer__group">
        <li className="carrer__item">
            <strong className="carrer__name">Web Agency</strong>
            <span className="carrer__period">
              GN 글로벌<br/>2019.04 - 2019.07
            </span>
          </li>
          <li className="carrer__item">
            <strong className="carrer__name">Web Agency</strong>
            <span className="carrer__period">
              DFLUID<br/>2019.08 - 2022.04
            </span>
          </li>
        </ul>
      </div>
      
      <div className="container works">
        <h1 className="section__title">Recent Works .</h1>
        <div className="section__inner">
          <ul className="project">
            {projectLists.map(list => (
              <li key={list.id} className="project__list">
                <figure className="project__image-wrap">
                  <a href={list.url} target="_blank" className="project__link">
                    <img src={list.image} alt="" className="project__image" />
                    {
                      list.isShow === false
                      ? <div className="dimmed">
                      보안상의 이유로 홈페이지 노출이 불가능합니다.
                    </div> : null
                    }
                  </a>
                  <figcaption className="project__caption">View Site</figcaption>
                </figure>
                <div className="project__info">
                  <strong className="project__title">{list.title}</strong>
                  <span className="project__period">{list.period}</span>
                  <p className="project__desc">
                    {list.desc}
                  </p>
                  <div className="tech">
                    {
                      list.tech.map((sub, subIndex) => <span key={subIndex} className="tech__list">{sub}</span>)
                    }
                  </div>
                </div>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Works;


