import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


function DirectoryFirst () {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h2 className='text-center'>Справочник</h2>
        <div className="main__content d-flex justify-content-center align-items-center">
          <Link to="/directory/position" className="main__content-box">
            <h3 className="main__content-title">Должности</h3>
          </Link>
          <Link to="/directory/staff" className="main__content-box">
            <h3 className="main__content-title">Сотрудники</h3>
          </Link>
          <Link to="/directory/subjects" className="main__content-box">
            <h3 className="main__content-title">Предметы</h3>
          </Link>
          <Link to="/directory/audience" className="main__content-box">
            <h3 className="main__content-title">Аудитории</h3>
          </Link>
          <Link to="/directory/cars" className="main__content-box">
            <h3 className="main__content-title">Машины</h3>
          </Link>
        </div>
      </div>
    </>
  )
}

export default DirectoryFirst
