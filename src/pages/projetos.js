import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/utils/seo'
import Projects from '../components/sections/Projects'

function ProjectsPage({ data }) {
  const { allStrapiProjects: { nodes: projects } } = data

  return (
    <Layout>
      <SEO title='Projetos' />
      <section className="projects-page">
        <Projects projects={projects} title='Projetos' />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        id
        name
        description
        github
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tech {
          id
          name
        }
      }
    }
  }
`

export default ProjectsPage