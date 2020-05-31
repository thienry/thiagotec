import React from 'react'

import SocialLinks from '../../constants/socialLinks'

function Footer() {
  return (
    <footer className="section-footer">
      <section className="footer">
        <div>
          <SocialLinks styleClass="footer-links" />
        </div>
        <div>
          <h4>
            copyright&copy;{new Date().getFullYear()}
            <span> ThiagoTec</span>
            <span className="footer-copy"> todos os direitos reservados</span>
          </h4>
        </div>
      </section>
    </footer>
  )
}

export default Footer
