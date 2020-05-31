import React from 'react'
import PropTypes from 'prop-types'

function Title({ title }) {
  return (
    <div className="section-title">
      <h2>{title || 'default title'}</h2>
      <div className="underline"></div>
    </div>
  )
}

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title