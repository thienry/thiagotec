import React from 'react'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import { Disqus } from 'gatsby-plugin-disqus'

import Layout from '../components/layout/layout'
import Title from '../components/layout/Title'
import SEO from '../components/utils/seo'

function blogTemplate({ data }) {
  const { 
    content, 
    title, 
    description, 
    id, 
    slug, 
    image: { 
      childImageSharp: {
        fluid: {
          src
        }
      }
    } 
  } = data.blog

  const { siteUrl } = data.site.siteMetadata
  
  let disqusConfig = {
    url: `${siteUrl}/blogs/${slug}`,
    identifier: id,
    title: title,
  }
  
  return (
    <Layout styleContainer="page-container" styleNav='nav-bg-color'>
      <SEO title={title} description={description} blogPost={src} />
      <section className="blog-template">
        <div className="section-center blog-post">
          <Title title={title} />
          <article className="blog-content">
            <ReactMarkdown source={content} />
          </article>
          <div className="disqus-container">
            <Disqus config={disqusConfig} />
          </div>
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
      id
      slug
      image {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }

    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export default blogTemplate