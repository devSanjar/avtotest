import React, { useState, useEffect } from 'react'
import {
  useDispatch,
  useSelector
} from 'react-redux'
import { addStaff, deleteStaffInfo, updateStaffInfo } from '../../actions/staffActions'

function TableStaff () {

  const [staff, setStaff] = useState([]);
  const [staffToUpdate, setStaffToUpdate] = useState('')

  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [activity, setActivity] = useState('')

  const [updateName, setUpdateName] = useState('')
  const [updatePosition, setUpdatePosition] = useState('')
  const [updateLogin, setUpdateLogin] = useState('')
  const [updatePassword, setUpdatePassword] = useState('')
  const [updateActivity, setUpdateActivity] = useState('')


  const dispatch = useDispatch()

  const staffAddInfo = useSelector(state => state.staffAddInfo)
  // const { staff } = staffAddInfo

  useEffect(() => {
    if (staffAddInfo.staff) {
      setStaff(staffAddInfo.staff);
    }
  }, [staffAddInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addStaff({ name, position, login, password, activity }))
    setName('')
    setPosition('')
    setLogin('')
    setPassword('')
    setActivity('')
    document.getElementById('modal_close').click()
  }

  const submitUpdateHandler = (e) => {
    e.preventDefault()
    alert('Редактировать')
    dispatch(updateStaffInfo({ staffToUpdate, updateName, updatePosition, updateLogin, updatePassword, updateActivity }))
    document.getElementById('modal_close').click()
  }

  const deleteHandler = (id) => {
    dispatch(deleteStaffInfo(id))
  }

  console.log('staff,', staff);

  return (
    <div className="container">
      <div className="card mt-4 shadow-sm rounded">
        <div className="card-body">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
              <h2 className='text-center' style={{ color: '#2ca1c3' }}>Сотрудники</h2>
              <button type="button" className="btn-gre  py-2 px-4 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Добавить</button>

              <table className="table table-style caption-top">
                <thead>
                  <tr className="tr-style">
                    <th className="num-style" scope="col">№</th>
                    <th scope="col">ФИО</th>
                    <th scope="col">Должность</th>
                    <th scope="col">Логин</th>
                    <th scope="col">Пароль</th>
                    <th scope="col">Активность</th>
                    <th scope="col">Управление</th>
                  </tr>
                </thead>

                <tbody>
                  {staff.map((item, index) => (
                    <tr key={index}>
                      <th className="tr-style num-style " scope="row">{index + 1}</th>
                      <td>{item.name}</td>
                      <td>{item.position}</td>
                      <td>{item.login}</td>
                      <td>{item.password}</td>
                      <td>{item.activity}</td>
                      <td>
                        <button type="button" className="tr-style table-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
                          onClick={() => setStaffToUpdate(item.name)}
                        >
                          <i className="far fa-edit" /> Редактировать
                        </button>
                        <span onClick={() => deleteHandler(index + 1)} className="trash-btn fas fa-trash-alt" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>


        {/* --------------MODAL--ДОБАВИТЬ ------------------- */}
        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <h4 className="btn-gree modal-title text-center py-3" id="exampleModal2Label">
                Добавить
              </h4>
              <div className="modal-body">
                <form onSubmit={submitHandler}>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>ФИО:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Должность:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='position'
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Логин:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='login'
                      value={login}
                      onChange={(e) => setLogin(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Пароль:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Активность:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='activity'
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                    />
                  </div>

                  <span className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Добавить
                    </button>
                    <button type="button" id="modal_close" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                      Закрыть
                    </button>
                  </span>

                </form>
              </div>
            </div>
          </div>
        </div>



        {/* --------------MODAL--Редактировать ------------------- */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <h4 className="btn-gree modal-title text-center py-3" id="exampleModalLabel">
                Редактировать
              </h4>
              <div className="modal-body">
                <form onSubmit={submitUpdateHandler}>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>ФИО:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='updateName'
                      value={updateName}
                      onChange={(e) => setUpdateName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Должность:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='updatePosition'
                      value={updatePosition}
                      onChange={(e) => setUpdatePosition(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Логин:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='updateLogin'
                      value={updateLogin}
                      onChange={(e) => setUpdateLogin(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Пароль:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='updatePassword'
                      value={updatePassword}
                      onChange={(e) => setUpdatePassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Активность:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='updateActivity'
                      value={updateActivity}
                      onChange={(e) => setUpdateActivity(e.target.value)}
                      required
                    />
                  </div>


                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Редактировать
                    </button>
                    <button type="button" id='modal_close' className="btn btn-outline-secondary" data-bs-dismiss="modal">
                      Закрыть
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default TableStaff
