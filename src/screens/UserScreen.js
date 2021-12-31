import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/UserScreen.css'
import Header from '../components/Header'


function HomeScreen() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="header__title">С возвращением, <strong>ФИО ученика</strong></h1>
        </div>
      </section>

      <main className="main">
        <div className="container">
          <div className="main__content d-flex justify-content-center align-items-center">
            <Link to="/directory" className="main__content-box">
              <h3 className="main__content-title">Справочник</h3>
              <span className="main__content-span"> <i className="fas fa-sitemap" /></span>
            </Link>
            <Link to="/group" className="main__content-box">
              <h3 className="main__content-title">Группы</h3>
              <span className="main__content-span"><i className="fas fa-globe" /></span>
            </Link>
            {/* <Link to="/" className="main__content-box">
              <h3 className="main__content-title">Договора</h3>
              <span className="main__content-span">
                <i className="fas fa-ticket-alt" />
              </span>
            </Link>
            <Link to="/" className="main__content-box">
              <h3 className="main__content-title">Учебный процесс</h3>
              <span className="main__content-span">
                <i className="far fa-credit-card" />
              </span>
            </Link> */}
          </div>

          <div className="main__content d-flex justify-content-between align-items-center">
            <div className="main__content-bottom">
              <div className="d-flex align-items-center">
                <span className="fas fa-cube box"></span>
                <h2 className="main__content-bottom-title">Наши продукты или реклама</h2>
              </div>
              <p className="main__content-bottom-text">Похоже у вас нет каких-либо продукитов/услуг. <a className="offer" href="#!">Оформит заказ?</a></p>
            </div>
            <div className="main__content-bottom">
              <div className="d-flex align-items-center">
                <span className="fas fa-comments box"></span>
                <h2 className="main__content-bottom-title">Новости, контакты или реклама</h2>
              </div>
              <p className="main__content-bottom-text">#667416 - прошу рассмотреть отправленные мною документы и заключить со мной Договор <span className="bottom-text-span">Закрыт</span></p>
              <p className="time">Последнее обновление: 18.06.2021(12:24)</p>
            </div>
          </div>
        </div>
      </main>


    </>
  )
}

export default HomeScreen
