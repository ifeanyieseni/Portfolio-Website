import React from 'react'
import BlogData from './Blogdata'
import { FaAngleDoubleRight } from 'react-icons/fa'
const Blog = () => {
  return (
    <>
      <section className='blog services'>
        <div className='container topMargin'>
          <div className='heading'>
            <h3>LATEST BLOG</h3>
            <h1>Read Inspirational Story Every Week</h1>
          </div>

          <div className='contain topMargin grid'>
            {BlogData.map((data) => {
              const { title, cover, category, date } = data
              return (
                <>
                  <div className='box'>
                    <div className='img'>
                      <img src={cover} alt='' />
                    </div>

                    <div className='text'>
                      <span>{date}</span>
                      <h2>{title}</h2>
                      <a href='/'>
                        Read More
                        <FaAngleDoubleRight className='icon' />
                      </a>
                      {/* <p>{category}</p> */}
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
        .
      </section>
    </>
  )
}

export default Blog
