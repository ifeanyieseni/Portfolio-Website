import React from 'react'
import data from './WrapperOneData'
const WrapperOne = () => {
  return (
    <>
      <section className='branding wrapperOne'>
        <div className='section grid1'>
          {data.map((val) => {
            const { num, text } = val
            return (
              <>
                <div className='box'>
                  <h1>{num}</h1>
                  <p>{text}</p>
                </div>
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default WrapperOne
