import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FaAngleDoubleRight } from 'react-icons/fa'

import Title from '../layout/Title'

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId}) {
      nodes {
        strapiId
        company
        role
        date
        description {
          id
          name
        }
      }
    }
  }
`

function Jobs() {
  const data = useStaticQuery(query)
  const { allStrapiJobs: { nodes: jobs } } = data

  const [value, setValue] = useState(0)

  const { company, role, date, description } = jobs[value]

  return (
    <section className="section jobs bg-white">
      <Title title="Experiências" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, idx) => (
            <button
              key={item.strapiId}
              onClick={() => setValue(idx)}
              className={`job-btn ${idx === value && "active-btn"}`}
            >
              {item.company}
            </button>
          ))}
        </div>
        <article className="job-info">
          <h3>{role}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => (
            <div className="job-desc" key={item.id}>
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default Jobs