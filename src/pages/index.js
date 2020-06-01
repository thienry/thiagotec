import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/utils/seo'
import Hero from '../components/sections/Hero'
import Strengths from '../components/sections/Strengths'
import Jobs from '../components/sections/Jobs'
import Projects from '../components/sections/Projects'
import Blogs from '../components/sections/Blogs'

const IndexPage = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs }
  } = data

  return (
    <Layout>
      <SEO title='Home' />
      <Hero />
      <Blogs blogs={blogs} title='Últimos artigos' showLink />
      <Jobs />
      <Strengths />
      <Projects projects={projects} title='Alguns Projetinhos' showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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

    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        content
        description
        date(fromNow: true, locale: "pt-br")
        title
        category
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage