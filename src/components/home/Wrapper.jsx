import React from 'react'

const Wrapper = () => {
  const data = [
    {
      title: 'LOOKING FOR EXCLUSIVE SERVICES?',
      heading: 'Get The Best For Your Business',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]
  return (
    <>
      <section className='branding wrapper'>
        <div className='section'>
          {data.map((info) => {
            const { title, heading, desc } = info
            return (
              <div className='box'>
                <h3>{title}</h3>
                <h2>{heading}</h2>
                <p>{desc}</p>
                <button className='btn-primary'>Contact Us</button>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
