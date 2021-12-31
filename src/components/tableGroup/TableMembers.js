import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/styleGroup.css'

import { addInactiveGroup, editInActiveGroup, deleteInActiveGroupInfo } from '../../actions/InActiveGroupActions'


function TableMembers () {

  const [nameToUpdate, setNameToUpdate] = useState({})

  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [category, setCategory] = useState('')
  const [shift, setShift] = useState('')
  const [lang, setLang] = useState('RUS')
  const [contract, setContract] = useState('')
  const [paid, setPaid] = useState('')
  const [payment, setPayment] = useState('')

  const [editName, setEditName] = useState('')
  const [editNumber, setEditNumber] = useState('')
  const [editCategory, setEditCategory] = useState('')
  const [editShift, setEditShift] = useState('')
  const [editLang, setEditLang] = useState('RUS')
  const [editContract, setEditContract] = useState('')
  const [editPaid, setEditPaid] = useState('')
  const [editPayment, setEditPayment] = useState('')

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  const InActiveGroupInfo = useSelector(state => state.InActiveGroupInfo)
  const { inActiveGroup } = InActiveGroupInfo

  useEffect(() => {
    setData(inActiveGroup)
  }, [inActiveGroup])

  useEffect(() => {
    setFiltered(
      data.filter((item) => Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search.toLowerCase())))
    )
  }, [data, search])


  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addInactiveGroup({
      name,
      number,
      category,
      shift,
      lang,
      contract,
      paid,
      payment,
    }))
    setName('')
    setNumber('')
    setCategory('')
    setShift('')
    setLang('')
    setContract('')
    setPaid('')
    setPayment('')
    document.getElementById('modal_close').click()
  }

  const submitUpdateHandler = (e) => {
    e.preventDefault()
    alert('Редактировать')
    dispatch(editInActiveGroup({
      nameToUpdate,
      name: editName,
      number: editNumber,
      category: editCategory,
      shift: editShift,
      lang: editLang,
      contract: editContract,
      paid: editPaid,
      payment: editPayment
    }))
    document.getElementById('modal_update_close').click()
    setEditName('')
    setEditNumber('')
    setEditCategory('')
    setEditShift('')
    setEditLang('')
    setEditContract('')
    setEditPaid('')
    setEditPayment('')
  }

  const deleteHandler = (id) => {
    alert('Хотите удалить ?')
    dispatch(deleteInActiveGroupInfo(id))
  }

  const setUpdateInfo = (item) => {
    setEditName(item.name)
    setEditNumber(item.number)
    setEditCategory(item.category)
    setEditShift(item.shift)
    setEditLang(item.lang)
    setEditContract(item.contract)
    setEditPaid(item.paid)
    setEditPayment(item.payment)
    setNameToUpdate(item)
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
              <h2 className='text-center' style={{ color: '#791cb5' }}>Группы планируемые</h2>

              <div className="row">
                <div className="col-8">
                  <button type="button" className="btn btn-outline-success  py-2 px-4 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Добавить</button>
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

              <div style={{ overflowX: 'auto' }} >
                <table className="table align-middle table-hover table-sm caption-top">
                  <thead className='align-middle'>
                    <tr className="tr-style-group">
                      <th className="num-style" scope="col">№</th>
                      <th scope="col">Наименование</th>
                      <th scope="col">Номер</th>
                      <th scope="col">Категория</th>
                      <th scope="col">Смена</th>
                      <th scope="col">Язык</th>
                      <th scope="col">Договор</th>
                      <th scope="col">Оплачена</th>
                      <th scope="col">Оплата 100%</th>
                      <th scope="col">Управление</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filtered.map((item, index) => (
                      <tr key={index}>
                        <th className="tr-style-group num-style " scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.number}</td>
                        <td>{item.category}</td>
                        <td>{item.shift}</td>
                        <td>{item.lang}</td>
                        <td>{item.contract}</td>
                        <td>{item.paid}</td>
                        <td>{item.payment}</td>

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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Наименование:</h6></label>
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Номер:</h6></label>
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

                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Категория:</h6></label><br />
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value='A' style={{ color: '#791cb5' }}>A</option>
                          <option value='B' style={{ color: '#791cb5' }}>B</option>
                          <option value='BС' style={{ color: '#791cb5' }}>BC</option>
                          <option value='C' style={{ color: '#791cb5' }}>C</option>
                          <option value='D' style={{ color: '#791cb5' }}>D</option>
                          <option value='E' style={{ color: '#791cb5' }}>E</option>
                        </select>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Смена:</h6></label><br />
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={shift}
                          onChange={(e) => setShift(e.target.value)}
                        >
                          <option value='1-смена' style={{ color: '#791cb5' }}>1-смена</option>
                          <option value='2-смена' style={{ color: '#791cb5' }}>2-смена</option>
                          <option value='3-смена' style={{ color: '#791cb5' }}>3-смена</option>
                          <option value='4-смена' style={{ color: '#791cb5' }}>4-смена</option>
                        </select>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Язык:</h6></label><br />
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          value={lang}
                          onChange={(e) => setLang(e.target.value)}
                        >
                          <option value='RUS' name='RUS' style={{ color: '#791cb5' }}>RUS</option>
                          <option value='UZB' name="UZB" style={{ color: '#791cb5' }}>UZB</option>
                        </select>
                      </div>
                    </div>

                  </div>





                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Договор:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='contract'
                      value={contract}
                      onChange={(e) => setContract(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Оплачена:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='paid'
                      value={paid}
                      onChange={(e) => setPaid(e.target.value)}
                      required
                    />
                  </div>


                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Оплата 100%:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='payment'
                      value={payment}
                      onChange={(e) => setPayment(e.target.value)}
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Наименование:</h6></label>
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Номер:</h6></label>
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Категория:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editCategory'
                      value={editCategory}
                      onChange={(e) => setEditCategory(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Смена:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editShift'
                      value={editShift}
                      onChange={(e) => setEditShift(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Язык:</h6></label><br />
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={editLang}
                      onChange={(e) => setEditLang(e.target.value)}
                    >
                      <option value='RUS' name='RUS' style={{ color: '#791cb5' }}>RUS</option>
                      <option value='UZB' name="UZB" style={{ color: '#791cb5' }}>UZB</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Оплачена:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editPaid'
                      value={editPaid}
                      onChange={(e) => setEditPaid(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Оплата 100%:</h6></label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      name='editPayment'
                      value={editPayment}
                      onChange={(e) => setEditPayment(e.target.value)}
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

export default TableMembers
