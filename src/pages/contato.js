import React from 'react'

import { useForm } from '../components/utils/hooks'
import Layout from '../components/layout/layout'
import SEO from '../components/utils/seo'

function Contact() {
  function validateContactForm(values) {
    let errors = {}

    const strippedName = values.name.trim().replace(/<\/?[^>]+(>|$)/g, '')
    const strippedEmail = values.email.trim().replace(/<\/?[^>]+(>|$)/g, '')
    const strippedMessage = values.message.trim().replace(/<\/?[^>]+(>|$)/g, '')

    if (strippedName === '') errors.name = 'Por favor, preencha o campo nome.'
    if (strippedEmail === '') errors.email = 'Por favor, preencha o campo email.'
    if (strippedMessage === '') errors.message = 'Por favor, preencha o campo mensagem.'

    return errors
  }

  const { values, errors, onChange, onSubmit } = 
    useForm({ name: '', email: '', message: '' }, validateContactForm)

  return (
    <Layout styleContainer="page-container" styleNav='nav-bg-color'>
      <SEO title='Contato' description="Entre em contato" />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Entre em contato</h3>
          <form onSubmit={onSubmit} action="https://formspree.io/xnqgpwjp" method="POST">
            <div className="form-group">
              <input type="text" name="name" value={values.name} onChange={onChange} placeholder="nome" className="form-control" aria-label="name" />
              {errors.name && (<span className="form-validation">{errors.name}</span>)}

              <input type="email" name="email" value={values.email} onChange={onChange} placeholder="email" className="form-control" aria-label="email" />
              {errors.email && (<span className="form-validation">{errors.email}</span>)}

              <textarea name="message" rows="5" value={values.message} onChange={onChange} placeholder="Mensagem" className="form-control" aria-label="message" ></textarea>
              {errors.message && (<span className="form-validation">{errors.message}</span>)}
            </div>
            <button type="submit" className="submit-btn btn">Enviar</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
