import React from 'react'
import data from './AboutData'
const About = () => {
  return (
    <>
      <section className='about topMargin'>
        <div className='container flex'>
          {data.map((info) => {
            const { cover, desc1, desc2, desc3, title } = info

            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>About Me</h3>
                    <h1>{title}</h1>
                  </div>
                  <p>{desc1}</p>
                  <p>{desc2}</p>
                  <p>{desc3}</p>
                  <button className='btn-primary'>Download CV</button>
                </div>
                <div className='right'>
                  <div className='img'>
                    <img src={cover} alt='cover-img' />
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default About
