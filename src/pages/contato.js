import React, { useState } from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/utils/seo'

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [errMsg, setErrMsg] = useState({
    errMsgName: "",
    errMsgEmail: "",
    errMsgMessage: "",
  })

  const { name, email, message } = contactForm
  const { errMsgName, errMsgEmail, errMsgMessage } = errMsg

  function onChange(e) {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value })
  };

  function onValidationChange(e) {
    if (name === '' || email === '' || message === '') {
      setErrMsg({ ...errMsg, [e.target.name]: 'Por favor preencha o campo acima.' })
    } else {
      setErrMsg(null)
    }
  }

  function onSubmit(e) {
    if (name === '' || email === '' || message === '') {
      e.preventDefault()
      setErrMsg({ ...errMsg, [e.target.name]: 'Por favor preencha o campo acima.' })
    }
  }

  return (
    <Layout styleContainer="page-container" styleNav='nav-bg-color'>
      <SEO title='Contato' />
      <section className="contact-page">
        <article className="contact-form">
          <h3>Entre em contato</h3>
          <form onSubmit={onSubmit} action="https://formspree.io/xnqgpwjp" method="POST">
            <div className="form-group">
              <input type="text" name="name" value={name} onChange={onChange} placeholder="nome" className="form-control" />
              {errMsgName && (<span className="form-validation" onChange={onValidationChange}>{errMsgName}</span>)}

              <input type="email" name="email" value={email} onChange={onChange} placeholder="email" className="form-control" />
              {errMsgEmail && (<span className="form-validation" onChange={onValidationChange}>{errMsgEmail}</span>)}

              <textarea name="message" rows="5" value={message} onChange={onChange} placeholder="Mensagem" className="form-control"></textarea>
              {errMsgMessage && (<span className="form-validation" onChange={onValidationChange}>{errMsgMessage}</span>)}

            </div>
            <button type="submit" className="submit-btn btn">Enviar</button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default Contact
