import React from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

import Links from '../../constants/links'
import SocialLinks from '../../constants/socialLinks'

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <Links styleClass={`${isOpen ? 'sidebar-links' : ''}`} />
        <SocialLinks styleClass={`${isOpen ? 'sidebar-icons' : ''}`} />
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

export default Sidebar