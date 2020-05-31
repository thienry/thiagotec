import React from 'react'
import SocialLinks from '../../constants/socialLinks'

function Hero() {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Thiago Moura</h1>
            <h4>Desenvolvedor Frontend Web & Mobile</h4>
            <SocialLinks />
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero