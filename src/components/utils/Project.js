import React from 'react'
import Image from 'gatsby-image'
import PropTypes from 'prop-types'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'

function Project({ description, name, github, url, tech, image, idx }) {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />

      <div className="project-info">
        <span className="project-number">0{++idx}</span>
        <h3>{name}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {tech.map(item => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
        
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  idx: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Project