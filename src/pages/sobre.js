import React from 'react'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Title from '../components/layout/Title'
import SEO from '../components/utils/seo'

const about = ({ data: { allStrapiAbout: { nodes } } }) => {
  const { info, techs, title, image } = nodes[0]

  return (
    <Layout styleContainer="page-container" styleNav='nav-bg-color'>
      <SEO title='Sobre' description="Sobre mim"  />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {techs.map(tech => (
                <span key={tech.id}>{tech.name}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        techs {
          id
          name
        }
        title
        info
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

export default about
