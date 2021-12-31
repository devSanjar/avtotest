import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/SideBarDirectory.css'
import '../styles/DirectoryScreen.css'


function Sidebar () {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <nav className="header__nav d-flex justify-content-around align-items-center">
            <Link to='/' >
              <img className="logo" src="/images/logo.png" alt="" />
            </Link>

            <button className="user-conf btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
              <i className="fas fa-bars py-1 px-1" />
            </button>
            <span />
            <h2 className="user-id">
              Ваш ID: <span className="user-span">U17406</span>
            </h2>
            <span />
            <Link to='/' className="user-conf btn btn-success">
              <i className="fas fa-user-cog" />
            </Link>
            <span />
          </nav>
        </div>
      </header>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <img src="/images/logo.png" alt="" />
          <h3 className='responsive'>Справочник</h3>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
          <div className="accordion accordion-flush" id="accordionPanelsStayOpenExample">

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                  <Link to='/directory/position' className='linkSideBar'>
                    <h5>Должности</h5>
                  </Link>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  <div className="list-group">
                    <Link to="/" className="list-group-item list-group-item-action" aria-current="true">
                      <h6>TEST</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                  <Link to='/directory/staff' className='linkSideBar'>
                    <h5>Сотрудники</h5>
                  </Link>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                  <div className="list-group">
                    <Link to="/" className="list-group-item list-group-item-action" aria-current="true">
                      <h6>TEST</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <Link to='/directory/subjects' className='linkSideBar'>
                    <h5>Предметы</h5>
                  </Link>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                  <div className="list-group">
                    <Link to="/" className="list-group-item list-group-item-action" aria-current="true">
                      <h6>TEST</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>



            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                  <Link to='/directory/audience' className='linkSideBar'>
                    <h5>Аудитории</h5>
                  </Link>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div className="accordion-body">
                  <div className="list-group">
                    <Link to="/" className="list-group-item list-group-item-action" aria-current="true">
                      <h6>TEST</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>




            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                  <Link to='/directory/cars' className='linkSideBar'>
                    <h5>Автомашины</h5>
                  </Link>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div className="accordion-body">
                  <div className="list-group">
                    <Link to="/" className="list-group-item list-group-item-action" aria-current="true">
                      <h6>TEST</h6>
                    </Link>
                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
      </div>

    </>
  )
}

export default Sidebar
