import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import ScrollToTop from '../utils/ScrollToTop'

const Layout = ({ children, styleNav, styleContainer, isActive }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('load', () => {
      const navScroll = document.querySelector('nav')
      const scrollTop = document.querySelector('.scroll-to')

      navScroll.classList.add('sticky', window.scrollY > 10)
      scrollTop.classList.add('scroll-to-top', window.scrollY > 700)
    })

    window.addEventListener('scroll', () => {
      const navScroll = document.querySelector('nav')
      const scrollTop = document.querySelector('.scroll-to')

      navScroll.classList.toggle('sticky', window.scrollY > 0)
      scrollTop.classList.toggle('scroll-to-top', window.scrollY > 700)
      scrollTop.classList.toggle('scroll-fadeout', window.scrollY < 800)
    })
  }, [])

  function toggleSidebar() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div id="top" className={`content ${styleContainer ? styleContainer : ''}`}>
        <Navbar isActive={isActive} styleNav={styleNav} toggleSidebar={toggleSidebar} siteTitle={data.site.siteMetadata.title} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main>{children}</main>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
