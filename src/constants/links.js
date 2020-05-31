import React from 'react'
import { Link } from 'gatsby'

const data = [
  {
    id: 1,
    text: 'home',
    url: '/'
  },
  {
    id: 2,
    text: 'blog',
    url: '/blog'
  },
  {
    id: 3,
    text: 'Projetos',
    url: '/projetos'
  },
  {
    id: 4,
    text: 'sobre',
    url: '/sobre'
  },
  {
    id: 5,
    text: 'contato',
    url: '/contato'
  },
]

const tmpLinks = data.map(link => {
  return (
    <li key={link.id} className='nav-li'>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ''}`}>
      {tmpLinks}
    </ul>
  )
}