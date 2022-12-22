import React from 'react'
import ServicesData from './Data'

const Services = () => {
  return (
    <div className='container'>
      <section className='services topMargin'>
        <div className='section'>
          <h3>My Services</h3>
          <h1>Interactive Services Offered by Me</h1>
        </div>

        <div className='contain grid topMargin'>
          {ServicesData.map((service, index) => {
            const { title, desc, cover } = service
            return (
              <>
                <div className='box'>
                  <div className='img'>
                    <img src={cover} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Services
