import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'
const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    header.classList.toggle('active', window.scrollY > 200)
  })
  return (
    <>
      <header className='header'>
        <div className='container flex'>
          <div className='logo'>
            <img src='assets/logo.png' alt='' />
          </div>

          <div className='nav'>
            <ul
              className={sidebar ? 'nav-links-sidebar' : 'nav-links'}
              onClick={() => setSidebar(false)}
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/pages'>Pages</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <button
            className='navbar-items-icon'
            onClick={() => setSidebar(!sidebar)}
          >
            {sidebar ? <RiCloseLine /> : <RiMenuLine />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
