import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/utils/seo'

function Contact() {
  return (
    <Layout>
      <SEO title='Contato' />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Entre em contato</h3>
          <form action="https://formspree.io/xnqgpwjp" method="POST">
            <div className="form-group">
              <input type="text" name="name" placeholder="nome" className="form-control" />
              <input type="email" name="email" placeholder="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="Mensagem" className="form-control"></textarea>
            </div>
            <button type="submit" className="submit-btn btn">Enviar</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
