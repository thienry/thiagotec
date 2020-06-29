import React from 'react'
import { graphql, Link } from 'gatsby'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import Layout from '../components/layout/layout'
import Blogs from '../components/sections/Blogs'
import SEO from '../components/utils/seo'


function blogListTemplate({ data, pageContext }) {
  const { allStrapiBlogs: { nodes: posts } } = data

  const isFirst = pageContext.currentPage === 1
  const isLast = pageContext.currentPage === pageContext.numPages
  const prevPage = pageContext.currentPage - 1 === 1 ? '/blog' : '/blog/page/' + (pageContext.currentPage - 1).toString()
  const nextPage = '/blog/page/' + (pageContext.currentPage + 1).toString()

  return (
    <Layout styleContainer="page-container" styleNav='nav-bg-color'>
      <SEO title='Blog' description="Blog de Tecnologia" />
      <section className="blog-page">
        <Blogs blogs={posts} pageTitle="Blog" />
        {(!isFirst || !isLast) && (<div className="blog-list-pagination">
          {!isFirst && (
            <Link to={prevPage} rel="prev" className="btn">
              <FaChevronLeft /> Posts mais novos
            </Link>
          )}
          {!isLast && (
            <Link to={nextPage} rel="next" className="btn">
              Posts mais antigos <FaChevronRight />
            </Link>
          )}
        </div>
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetPosts($skip: Int!, $limit: Int!) {
    allStrapiBlogs(
      sort: {fields: date, order: DESC}
      limit: $limit
      skip: $skip
    ) {
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

export default blogListTemplate
