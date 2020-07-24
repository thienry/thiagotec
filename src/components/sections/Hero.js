import React from 'react'
import { motion } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'

import SocialLinks from '../../constants/socialLinks'

function Hero() {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <motion.div className="underline"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 4
              }}
            ></motion.div>

            <motion.h1
              initial={{
                x: '-100vw'

              }}
              animate={{
                x: 0
              }}
            >
              Thiago Moura
            </motion.h1>
            <motion.h4
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 4
              }}
            >
              Desenvolvedor Frontend Web & Mobile
            </motion.h4>

            <SocialLinks />

            <motion.a
              animate={{
                transition: { yoyo: Infinity },
                y: [10, -10],
              }}
              className="hero-next" href="#articles">
              <FaChevronDown />
            </motion.a>
          </div>
        </article>
      </div>
    </header>
  )
}

export default Hero