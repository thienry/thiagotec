import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Blogs from '../components/sections/Blogs'
import SEO from '../components/utils/seo'

function blogPage({ data }) {
  const { allStrapiBlogs: { nodes: blogs } } = data

  return (
    <Layout styleNav='nav-bg-color'>
      <SEO title='Blog' />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}) {
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

export default blogPage