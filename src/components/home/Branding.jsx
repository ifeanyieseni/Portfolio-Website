import React from 'react'
import data from './BrandData'
const Branding = () => {
  return (
    <>
      <section className='branding'>
        <div className='container grid'>
          {data.map((item) => {
            const { id, heading, desc } = item
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{id}</h1>
                </div>
                <div className='description'>
                  <h2>{heading}</h2>
                  <p>{desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
