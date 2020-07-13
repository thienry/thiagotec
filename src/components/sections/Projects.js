import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Title from '../layout/Title'
import Project from '../utils/Project'

function Projects({ projects, title, showLink }) {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, idx) => (
          <Project key={project.id} idx={idx} {...project} />
        ))}
      </div>
      {showLink && (
        <Link to='/projetos' className="btn center-btn" activeClassName="nav-active">
          projetos
        </Link>
      )}
    </section>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Projects