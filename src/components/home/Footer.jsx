import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid1'>
          <div className='box'>
            <img src='./assets/logo1.png' alt='' />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus autem alias repudiandae recusandae quidem magni
              cupiditate! Nesciunt eius et nemo.
            </p>
            <div className='socialIcon'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-instagram'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-pinterest'></i>
              {/* <i className='fab fa-dribble'></i> */}
            </div>
          </div>

          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
              <li>FAQ's</li>
            </ul>
          </div>

          <div className='box'>
            <h2>Recent Post</h2>
            <div className='text'>
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Feb 2022 </span>
            </div>
            <div className='text'>
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Feb 2022 </span>
            </div>
            <div className='text'>
              <p>3 WooCommerce Plugins to Boost Sales</p>
              <span>28 Feb 2022 </span>
            </div>
          </div>

          <div className='box'>
            <h2>Get in Touch</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              provident sunt ipsa exercitationem assumenda. Explicabo labore
              velit debitis totam itaque obcaecati maxime voluptatibus ipsa
              illum inventore corporis aut, rerum reprehenderit.
            </p>
            <div className='icon'>
              <i className='fa fa-location-dot'></i>
              <label htmlFor=''>
                Location: 27 Division St, Lagos, LA 10002,Nigeria
              </label>
            </div>

            <div className='icon'>
              <i className='fa fa-phone'></i>
              <label htmlFor=''>Phone: +2348141389081</label>
            </div>

            <div className='icon'>
              <i className='fa fa-envelope'></i>
              <label htmlFor=''>Email:support@gmail.com</label>
            </div>
          </div>
        </div>

        <div className='legal container'>
          <p>Copyright @2022. All rights reserved</p>
          <label htmlFor=''>
            Design & Developed by <span>Benards</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
