import React from 'react'

const Home = () => {
  return (
    <>
      <section className='home'>
        <div className='container flex'>
          <div className='left'>
            <div className='img'>
              <img src='./assets/home.png' alt='' />
            </div>
          </div>

          <div className='right topMargin'>
            <h1>
              I AM A <br />
              WEB DESIGNER
            </h1>
            <div className='socialIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
              <i className='fab fa-pinterest pinterest'></i>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              assumenda repudiandae laboriosam odit ex necessitatibus debitis
              maxime eniam unde est nemo!
            </p>
            <button className='btn-primary'>Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
