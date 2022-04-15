import React from 'react';
import './nav.scss'
import { FiHome } from 'react-icons/fi'
import { SiAboutdotme } from 'react-icons/si'
import { AiOutlineProject } from 'react-icons/ai'
import { BiMailSend } from 'react-icons/bi'
import classNames from 'classnames';
import { useState } from 'react'

// floating nav
const nav = [
  {
    href: "#",
    icon: FiHome
  },
  {
    href: "#about",
    icon: SiAboutdotme
  },
  {
    href: "#works",
    icon: AiOutlineProject
  },
  {
    href: "#contact",
    icon: BiMailSend
  }
]


const Nav = () => {
  const [activeNav,  setActiveNav] = useState('#')

  return (
    <nav className="nav">
      {nav.map((item, i) => (
        <a
          href={item.href}
          key={i}
          className={classNames('nav__anchor', { 'is-active': activeNav === item.href })}
          onClick={() => setActiveNav(item.href)}
        >
          <item.icon />
        </a>
      ))}
    </nav>
  )
}


export default Nav;


