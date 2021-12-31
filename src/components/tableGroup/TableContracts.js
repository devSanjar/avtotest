import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInactiveGroupContracts, editGroupContracts, contractInfo } from '../../actions/InActiveGroupContractActions'

import '../../styles/styleGroup.css'


function TableContracts () {

  const [nameToUpdate, setNameToUpdate] = useState({})

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [total, setTotal] = useState('')
  const [paid, setPaid] = useState('')
  const [company, setCompany] = useState('')
  const [totalPeople, setTotalPeople] = useState('')

  const [editName, setEditName] = useState('')
  const [editNumber, setEditNumber] = useState('')
  const [editDate, setEditDate] = useState('')
  const [editTotal, setEditTotal] = useState('')
  const [editPaid, setEditPaid] = useState('')
  const [editCompany, setEditCompany] = useState('')
  const [editTotalPeople, setEditTotalPeople] = useState('')

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  const dispatch = useDispatch()

  const InActGroupContractInfo = useSelector(state => state.InActGroupContractInfo)
  const { contracts } = InActGroupContractInfo

  useEffect(() => {
    setData(contracts)
  }, [contracts])

  useEffect(() => {
    setFiltered(
      data.filter((item) => Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search.toLowerCase())))
    )
  }, [data, search])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addInactiveGroupContracts({
      name, number, date, total, paid, company, totalPeople
    }))
    setName('')
    setNumber('')
    setDate('')
    setTotal('')
    setPaid('')
    setCompany('')
    setTotalPeople('')
    document.getElementById('modal_close').click()
  }

  const submitUpdateHandler = (e) => {
    e.preventDefault()
    dispatch(editGroupContracts({
      nameToUpdate,
      name: editName,
      number: editNumber,
      date: editDate,
      total: editTotal,
      paid: editPaid,
      company: editCompany,
      totalPeople: editTotalPeople,
    }))
    document.getElementById('modal_update_close').click()
    setEditName('')
    setEditNumber('')
    setEditDate('')
    setEditTotal('')
    setEditPaid('')
    setEditCompany('')
    setEditTotalPeople('')
  }

  const setUpdateInfo = (item) => {
    setEditName(item.name)
    setEditNumber(item.number)
    setEditDate(item.date)
    setEditTotal(item.total)
    setEditPaid(item.paid)
    setEditCompany(item.company)
    setEditTotalPeople(item.totalPeople)
    setNameToUpdate(item)
  }

  const deleteHandler = (id) => {
    dispatch(contractInfo(id))
  }

  const clearHandler = (e) => {
    e.preventDefault()
    setSearch('')
  }

  return (
    <>
      {/* <div className="container"> */}
      <div className="card card-top-green m-4 shadow-sm rounded">
        <div className="card-body">
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home1" role="tabpanel" aria-labelledby="pills-home-tab1">
              <h2 className='text-center' style={{ color: '#4B0C77' }}>Договора планируемые</h2>
              <div className="row">
                <div className="col-8">
                  <button type="button" className="btn btn-outline-secondary  py-2 px-4 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Добавить</button>
                </div>

                <div className="col">
                  <div className="mb-3 input-group mt-3">

                    <input type="text"
                      onChange={(e) => setSearch(e.target.value)}
                      className="form-control" placeholder="Поиск..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    {search.length > 0 && <button className='btn btn-danger'
                      onClick={clearHandler}>X</button>}
                  </div>
                </div>


              </div>

              <div style={{ overflowX: 'auto' }} className='py-3' >
                <table className="table align-middle table-hover table-sm caption-top">
                  <thead className='align-middle'>
                    <tr className="tr-style-group">
                      <th className="num-style" scope="col">№</th>
                      <th scope="col">Организация/ФИО</th>
                      <th scope="col">Номер договора</th>
                      <th scope="col">Дата</th>
                      <th scope="col">Сумма</th>
                      <th scope="col">Оплачена</th>
                      <th scope="col">Юр.лицо</th>
                      <th scope="col">Всего людей</th>
                      <th scope="col">Управление</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filtered.map((item, index) => (
                      <tr key={index}>
                        <th className="tr-style-group num-style " scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.date}</td>
                        <td>{item.total}</td>
                        <td>{item.paid}</td>
                        <td>{item.company}</td>
                        <td>{item.totalPeople}</td>
                        <td>

                          <div className="btn-group" role="group">
                            <button type="button" className="tr-style-group table-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"
                              onClick={() => setUpdateInfo(item)}
                            >
                              <i className="far fa-edit" /> Редактировать
                            </button>

                            <button
                              onClick={() => deleteHandler(index + 1)}
                              className="trash-btn fas fa-trash-alt btn btn-danger" style={{ color: '#fff' }} />

                          </div>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        {/* --------------MODAL--ДОБАВИТЬ ------------------- */}
        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModal2Label" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <h4 className="btn-gree-group modal-title text-center py-3" id="exampleModal2Label">
                Добавить
              </h4>
              <div className="modal-body">
                <form
                  onSubmit={submitHandler}
                >

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Организация/ФИО:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Номер договора:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='phone'
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Дата:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='date'
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Сумма:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='total'
                      value={total}
                      onChange={(e) => setTotal(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Оплачена:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='paid'
                      value={paid}
                      onChange={(e) => setPaid(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Юр.лицо:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='company'
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Всего людей:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='totalPeople'
                      value={totalPeople}
                      onChange={(e) => setTotalPeople(e.target.value)}
                      required
                    />
                  </div>

                  <span className="modal-footer">
                    <button type="submit" className="btn btn-gre">
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
              <h4 className="btn-gree-group modal-title text-center py-3" id="exampleModalLabel">
                Редактировать
              </h4>
              <div className="modal-body">
                <form
                  onSubmit={submitUpdateHandler}
                >

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Организация/ФИО:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='editName'
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Номер договора:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='editNumber'
                      value={editNumber}
                      onChange={(e) => setEditNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Дата:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='editDate'
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Сумма:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='editTotal'
                      value={editTotal}
                      onChange={(e) => setEditTotal(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Оплачена:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='editPaid'
                      value={editPaid}
                      onChange={(e) => setEditPaid(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Юр.лицо:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='editCompany'
                      value={editCompany}
                      onChange={(e) => setEditCompany(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Всего людей:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      name='editTotalPeople'
                      value={editTotalPeople}
                      onChange={(e) => setEditTotalPeople(e.target.value)}
                      required
                    />
                  </div>

                  <div className="modal-footer">
                    <button type="submit" className="btn btn-gre">
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
      {/* </div> */}

    </>
  )
}

export default TableContracts
