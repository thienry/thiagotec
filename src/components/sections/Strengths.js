import React from 'react'

import Title from '../layout/Title'
import strengths from '../../constants/strengths'

function Strengths() {
  return (
    <section className="section bg-grey">
      <Title title='Skills' />
      <div className="section-center strengths-center">
        {strengths.map((strength) => {
          const { id, icon, text, title } = strength
          return (
            <article key={id} className='strength'>
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Strengths