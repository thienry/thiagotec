import React from 'react'
import { Link } from 'gatsby'
import { FaChevronUp } from 'react-icons/fa'

function ScrollToTop() {
  

  return (
    <Link className="scroll-to" to="#top">
      <FaChevronUp />
    </Link>
  )
}

export default ScrollToTop
