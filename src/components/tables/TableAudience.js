import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAudience, editNumberInfo, deleteAudienceInfo } from '../../actions/audienceActions'



function TableAudience () {

  const [numberToUpdate, setNumberToUpdate] = useState({})

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [responsible, setResponsible] = useState('')

  const [editNumber, setEditNumber] = useState('')
  const [editName, setEditName] = useState('')
  const [editResponsible, setEditResponsible] = useState('')

  const audienceInfo = useSelector(state => state.audienceInfo)
  const { audiences } = audienceInfo

  const dispatch = useDispatch()


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addAudience({ number, name, responsible }))
    setNumber('')
    setName('')
    setResponsible('')
    document.getElementById('modal_close').click()
  }

  const submitUpdateHandler = (e) => {
    e.preventDefault()
    alert('Редактировать')
    dispatch(editNumberInfo({
      numberToUpdate,
      number: editNumber,
      name: editName,
      responsible: editResponsible
    }))
    document.getElementById('modal_update_close').click()
    setEditNumber('')
    setEditName('')
    setEditResponsible('')
  }

  const setUpdateInfo = (item) => {
    setEditNumber(item.number)
    setEditName(item.name)
    setEditResponsible(item.responsible)
    setNumberToUpdate(item)
  }

  const deleteHandler = (id) => {
    alert('Хотите удалить ?')
    dispatch(deleteAudienceInfo(id))
  }

  return (
    <div className="container">
      <div className="card mt-4 shadow-sm rounded">
        <div className="card-body">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
              <h2 className='text-center' style={{ color: '#2ca1c3' }}>Аудитории</h2>
              <button type="button" className="btn-gre  py-2 px-4 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Добавить</button>

              <table className="table table-style caption-top">
                <thead>
                  <tr className="tr-style">
                    <th className="num-style" scope="col">№</th>
                    <th scope="col">Номер аудитории</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Ответственный</th>
                    <th scope="col">Управление</th>
                  </tr>
                </thead>

                <tbody>
                  {audiences.map((item, index) => (
                    <tr key={index}>
                      <th className="tr-style num-style " scope="row">{index + 1}</th>
                      <td>{item.number}</td>
                      <td>{item.name}</td>
                      <td>{item.responsible}</td>
                      <td>
                        <button type="button" className="tr-style table-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
                          onClick={() => setUpdateInfo(item)}
                        >
                          <i className="far fa-edit" /> Редактировать
                        </button>
                        <span
                          onClick={() => deleteHandler(index + 1)}
                          className="trash-btn fas fa-trash-alt" />
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
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Номер аудитории:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='number'
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Наименование:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Ответственный:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='responsible'
                      value={responsible}
                      onChange={(e) => setResponsible(e.target.value)}
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
        {/* --------------MODAL--Редактировать ------------------- */}
        {/* --------------MODAL--Редактировать ------------------- */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <h4 className="btn-gree modal-title text-center py-3" id="exampleModalLabel">
                Редактировать
              </h4>
              <div className="modal-body">
                <form
                  onSubmit={submitUpdateHandler}
                >

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Номер аудитории:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editNumber'
                      value={editNumber}
                      onChange={(e) => setEditNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Наименование:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editName'
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Ответственный:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editResponsible'
                      value={editResponsible}
                      onChange={(e) => setEditResponsible(e.target.value)}
                      required
                    />
                  </div>


                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Редактировать
                    </button>
                    <button type="button" id='modal_update_close' className="btn btn-outline-secondary" data-bs-dismiss="modal">
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

export default TableAudience