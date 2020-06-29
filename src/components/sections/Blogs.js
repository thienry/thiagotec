import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Title from '../layout/Title'
import Blog from '../utils/Blog'

function Blogs({ blogs, pageTitle, showLink }) {
  return (
    <section className="section blog-section">
      <Title title={pageTitle} />
      <div className="section-center blogs-center">
        {blogs.map(blog => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
      {showLink && (
        <Link to="/blog" className="btn center-btn">Blog</Link>
      )}
    </section>
  )
}

Blogs.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Blogs