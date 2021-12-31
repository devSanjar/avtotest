import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveDirectoryInfo, deleteDirectoryInfo, updateDirectoryInfo } from '../actions/directoryActions'

function TableDirectory () {
  const directoryInfo = useSelector(state => state.directoryInfo)
  const { directories } = directoryInfo

  const [positionToUpdate, setPositionToUpdate] = useState('')

  const [position, setPosition] = useState('')
  const [additionally, setAdditionally] = useState('')

  const [updatePosition, setUpdatePosition] = useState('')
  const [updateAdditionally, setUpdateAdditionally] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveDirectoryInfo({ position, additionally }))
    setPosition('')
    setAdditionally('')
    document.getElementById('modal_close').click()
  }

  // submit Handler for Редактировать
  const submitUpdateHandler = (e) => {
    e.preventDefault()
    alert('Редактировать')
    dispatch(updateDirectoryInfo({
      positionToUpdate,
      position: updatePosition,
      additionally: updateAdditionally
    }))
    document.getElementById('modal_update_close').click()
    setUpdatePosition('')
    setUpdateAdditionally('')
  }

  const setUpdateInfo = (item) => {
    setUpdatePosition(item.position)
    setUpdateAdditionally(item.additionally)
    setPositionToUpdate(item)
  }

  const deleteDirectoryInfoHandler = (id) => {
    dispatch(deleteDirectoryInfo(id))
  }

  return (
    <div className="container">
      <div className="card my-3 shadow-sm rounded">
        <div className="card-body">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
              <h2 className='text-center' style={{ color: '#2ca1c3' }}>Должности</h2>
              <button type="button" className="btn-gre  py-2 px-4 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Добавить</button>

              <table className="table table-style caption-top">
                <thead>
                  <tr className="tr-style">
                    <th className="num-style" scope="col">№</th>
                    <th scope="col">Наименование должности</th>
                    <th scope="col">Дополнительно</th>
                    <th scope="col">Управление</th>
                  </tr>
                </thead>

                <tbody>
                  {directories.map((item, index) => (
                    <tr key={index}>
                      <th className="tr-style num-style " scope="row">{index + 1}</th>
                      <td>{item.position}</td>
                      <td>{item.additionally}</td>
                      <td>
                        <button type="button" className="tr-style table-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
                          onClick={() => setUpdateInfo(item)}
                        >
                          <i className="far fa-edit" /> Редактировать
                        </button>
                        <span onClick={() => deleteDirectoryInfoHandler(index + 1)} className="trash-btn fas fa-trash-alt" />
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>
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
                      <label htmlFor="recipient-name" className="directory-h5 col-form-label">Наименование должности:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name='position'
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="directory-h5 col-form-label">Дополнительно:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name='additionally'
                        value={additionally}
                        onChange={(e) => setAdditionally(e.target.value)}
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
                      <label htmlFor="recipient-name" className="directory-h5 col-form-label">Наименование должности:</label>
                      {/*-------------NEW ONE-------------- */}
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name='position'
                        value={updatePosition}
                        onChange={(e) => setUpdatePosition(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message-text" className="directory-h5 col-form-label">Дополнительно:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="recipient-name"
                        name='additionally'
                        value={updateAdditionally}
                        onChange={(e) => setUpdateAdditionally(e.target.value)}
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
    </div>
  )
}

export default TableDirectory
