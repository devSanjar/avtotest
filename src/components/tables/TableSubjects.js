import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSubject, deleteStaffInfo } from '../../actions/subjectActions'
import { editSub } from '../../actions/subjectActions'

function TableSubjects () {

  const [subjectToUpdate, setSubjectToUpdate] = useState({})

  const [subject, setSubject] = useState('')
  const [decoding, setDecoding] = useState('')

  const [editSubject, setEditSubject] = useState('')
  const [editDecoding, setEditDecoding] = useState('')

  const subjectInfo = useSelector(state => state.subjectInfo)
  const { subjects } = subjectInfo

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addSubject({ subject, decoding }))
    setSubject('')
    setDecoding('')
    document.getElementById('modal_close').click()
  }

  const submitUpdateHandler = (e) => {
    e.preventDefault()

    // alert('Редактировать')

    dispatch(editSub({
      subjectToUpdate,
      subject: editSubject,
      decoding: editDecoding
    }))
    document.getElementById('modal_update_close').click()

    setEditSubject('')
    setEditDecoding('')
  }

  const setUpdateInfo = (item) => {
    setEditSubject(item.subject);
    setEditDecoding(item.decoding);
    setSubjectToUpdate(item);
  }

  const deleteHandler = (id) => {
    dispatch(deleteStaffInfo(id))
  }

  return (
    <div className="container">
      <div className="card mt-4 shadow-sm rounded">
        <div className="card-body">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
              <h2 className='text-center' style={{ color: '#2ca1c3' }}>Предметы</h2>
              <button type="button" className="btn-gre  py-2 px-4 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Добавить</button>

              <table className="table table-style caption-top">
                <thead>
                  <tr className="tr-style">
                    <th className="num-style" scope="col">№</th>
                    <th scope="col">Наименование предмета</th>
                    <th scope="col">Расшифровка</th>
                    <th scope="col">Управление</th>
                  </tr>
                </thead>

                <tbody>
                  {subjects.map((item, index) => (
                    <tr key={index}>
                      <th className="tr-style num-style " scope="row">{index + 1}</th>
                      <td>{item.subject}</td>
                      <td>{item.decoding}</td>
                      <td>
                        <button type="button" className="tr-style table-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
                          onClick={() => setUpdateInfo(item)} >
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
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Наименование предмета:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='subject'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Расшифровка:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='decoding'
                      value={decoding}
                      onChange={(e) => setDecoding(e.target.value)}
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
                <form onSubmit={submitUpdateHandler} >

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Наименование предмета:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editSubject'
                      value={editSubject}
                      onChange={(e) => setEditSubject(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="directory-h5 col-form-label"><h6>Расшифровка:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editDecoding'
                      value={editDecoding}
                      onChange={(e) => setEditDecoding(e.target.value)}
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

export default TableSubjects
