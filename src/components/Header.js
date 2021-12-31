import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/UserScreen.css'



function Header () {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <nav className="header__nav d-flex justify-content-between align-items-center">

            <Link to='/' >
              <img className="logo" src="/images/logo.png" alt="" />
            </Link>
            <h2 className="user-id">
              Ваш ID: <span className="user-span">U17406</span>
            </h2>
            <Link to='/' className="user-conf btn btn-success">
              <i className="fas fa-user-cog" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
