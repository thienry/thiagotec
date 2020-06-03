import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const data = [
  {
    id: 1,
    icon: <FaGithub className='social-icon' />,
    url: 'https://github.com/thienry'
  },
  {
    id: 2,
    icon: <FaInstagram className='social-icon' />,
    url: 'https://instagram.com/thienry'
  },
  {
    id: 3,
    icon: <FaLinkedin className='social-icon' />,
    url: 'https://www.linkedin.com/in/thiagotechdev/'
  },
]

const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} target="_blank" rel="noreferrer" className='social-link'>
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ''}`}>
      {links}
    </ul>
  )
}