import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
// import '../styles/groupFist.css'

function GroupFirst() {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className='text-center'>Группы</h1>
        <div className="main__content d-flex justify-content-center align-items-center">
          <Link to="/group/members" className="main__content-box">
            <h3 className="main__content-title">Группы планируемые</h3>
          </Link>
          {/* <Link to="/group/active/members" className="main__content-box">
            <h3 className="main__content-title">Группы активные</h3>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default GroupFirst
