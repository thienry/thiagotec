import React from 'react'
import { graphql, Link } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout/layout'
import SEO from '../components/utils/seo'

function blogTemplate({ data }) {
  const { content, title, description } = data.blog

  return (
    <Layout styleNav='nav-bg-color'>
      <SEO title={title} description={description} />
      <section className="blog-template">
        <div className="section-center blog-post">
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blog
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      description
    }
  }
`

export default blogTemplate