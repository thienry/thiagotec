import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { FaAlignRight } from 'react-icons/fa'

import PageLinks from '../../constants/links'

function Navbar({ siteTitle, toggleSidebar, styleNav }) {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const navScroll = document.querySelector('nav')
      navScroll.classList.toggle('sticky', window.scrollY > 0)
    })
  })

  return (
    <nav className={`navbar ${styleNav ? styleNav : ''}`}>
      <div className="nav-center">
        <div className="nav-header">
          <h1 className='nav-title'>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <button type='button' className='toggle-btn' onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass='nav-links' />
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

export default Navbar