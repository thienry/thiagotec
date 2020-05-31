import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/utils/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="error-page">
      <div className="error-container">
        <h1>oops, parece que você está perdido...</h1>
        <Link to="/" className="btn">voltar para a home</Link>
      </div>
    </main>
  </Layout>
)

export default NotFoundPage
