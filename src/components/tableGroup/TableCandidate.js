import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addInactiveGroupCandidate, editInActCandidate, deleteInActCandidateInfo } from '../../actions/InActiveGroupCandidateAction'

import '../../styles/styleGroup.css'


function TableCandidate () {
  const [nameToUpdate, setNameToUpdate] = useState({})

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [shift, setShift] = useState('')
  const [lang, setLang] = useState('RU')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [comment, setComment] = useState('')
  const [contract, setContract] = useState('')
  const [paid, setPaid] = useState('')
  const [payment, setPayment] = useState('')

  const [editName, setEditName] = useState('')
  const [editCategory, setEditCategory] = useState('')
  const [editShift, setEditShift] = useState('')
  const [editLang, setEditLang] = useState('RU')
  const [editPhone, setEditPhone] = useState('')
  const [editDate, setEditDate] = useState('')
  const [editComment, setEditComment] = useState('')
  const [editContract, setEditContract] = useState('')
  const [editPaid, setEditPaid] = useState('')
  const [editPayment, setEditPayment] = useState('')

  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState([])

  const dispatch = useDispatch()

  const InActGroupCandidateInfo = useSelector(state => state.InActGroupCandidateInfo)
  const { candidates } = InActGroupCandidateInfo

  useEffect(() => {
    setData(candidates)
  }, [candidates])

  useEffect(() => {
    // setFiltered(
    //   data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    // )
    setFiltered(
      data.filter((item) => Object.keys(item).some(key => item[key].toString().toLowerCase().includes(search.toLowerCase())))
    )

  }, [data, search])


  // const clearAll = (e) => {
  //   e.preventDefault()
  //   setSearch(e.target.value)
  // }


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addInactiveGroupCandidate({
      name,
      category,
      shift,
      lang,
      phone,
      date,
      comment,
      contract,
      paid,
      payment,
    }))
    setName('')
    setCategory('')
    setShift('')
    setLang('')
    setPhone('')
    setDate('')
    setComment('')
    setContract('')
    setPaid('')
    setPayment('')
    document.getElementById('modal_close').click()
  }

  const submitUpdateHandler = (e) => {
    e.preventDefault()
    alert('Редактировать')
    dispatch(editInActCandidate({
      nameToUpdate,
      name: editName,
      category: editCategory,
      shift: editShift,
      lang: editLang,
      phone: editPhone,
      date: editDate,
      comment: editComment,
      contract: editContract,
      paid: editPaid,
      payment: editPayment
    }))
    document.getElementById('modal_update_close').click()
    setEditName('')
    setEditPhone('')
    setEditCategory('')
    setEditShift('')
    setEditLang('')
    setEditContract('')
    setEditPaid('')
    setEditPayment('')
  }

  const setUpdateInfo = (item) => {
    setEditName(item.name)
    setEditCategory(item.category)
    setEditShift(item.shift)
    setEditLang(item.lang)
    setEditPhone(item.phone)
    setEditDate(item.date)
    setEditComment(item.comment)
    setEditContract(item.contract)
    setEditPaid(item.paid)
    setEditPayment(item.payment)
    setNameToUpdate(item)
  }

  const deleteHandler = (id) => {
    dispatch(deleteInActCandidateInfo(id))
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
              <h2 className='text-center' style={{ color: '#4caf21' }}>Кандидаты планируемые</h2>
              <div className="row">
                <div className="col-8">
                  <button type="button" className="btn btn-outline-secondary  py-2 px-4 my-3" data-bs-toggle="modal" data-bs-target="#exampleModal2" data-bs-whatever="@getbootstrap">Добавить</button>
                </div>

                <div className="col">
                  <div className="mb-3 input-group mt-3">

                    <input type="text" onChange={(e) => setSearch(e.target.value)} className="form-control" placeholder="Поиск..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                    {search.length > 0 && <button className='btn btn-danger' onClick={clearHandler}>X</button>}
                    {/* <button className='btn btn-danger' onClick={clearHandler}>X</button> */}
                  </div>
                </div>


              </div>

              <div style={{ overflowX: 'auto' }} className='py-3' >
                <table className="table align-middle table-hover table-sm caption-top">
                  <thead className='align-middle'>
                    <tr className="tr-style-group">
                      <th className="num-style" scope="col">№</th>
                      <th scope="col">ФИО</th>
                      <th scope="col">Категория</th>
                      <th scope="col">Смена</th>
                      <th scope="col">Язык</th>
                      <th scope="col">Телефон</th>
                      <th scope="col">Дата</th>
                      <th scope="col">Коментарий</th>
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
                        <td>{item.category}</td>
                        <td>{item.shift}</td>
                        <td>{item.lang}</td>
                        <td>{item.phone}</td>
                        <td>{item.date}</td>
                        <td>{item.comment}</td>
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>ФИО:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Категория:</h6></label><br />
                        <select
                          required
                          className="form-select"
                          aria-label="Default select example"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value='' name='' style={{ color: '#791cb5' }} disabled defaultValue hidden>Категория:</option>
                          <option value='A' name='A' style={{ color: '#791cb5' }}>A</option>
                          <option value='B' name="B" style={{ color: '#791cb5' }}>B</option>
                          <option value='BC' name="BC" style={{ color: '#791cb5' }}>BC</option>
                          <option value='C' name="C" style={{ color: '#791cb5' }}>C</option>
                          <option value='D' name="D" style={{ color: '#791cb5' }}>D</option>
                          <option value='E' name="E" style={{ color: '#791cb5' }}>E</option>
                        </select>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Смена:</h6></label><br />
                        <select
                          required
                          className="form-select"
                          aria-label="Default select example"
                          value={shift}
                          onChange={(e) => setShift(e.target.value)}
                        >
                          <option value='' name='' style={{ color: '#791cb5' }} disabled defaultValue hidden>Смена:</option>
                          <option value='1-смена' name='1-смена' style={{ color: '#791cb5' }}>1-смена</option>
                          <option value='2-смена' name='2-смена' style={{ color: '#791cb5' }}>2-смена</option>
                          <option value='3-смена' name='3-смена' style={{ color: '#791cb5' }}>3-смена</option>
                          <option value='4-смена' name='4-смена' style={{ color: '#791cb5' }}>4-смена</option>

                        </select>
                      </div>
                    </div>

                    <div className="col">
                      <div className="mb-3">
                        <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#791cb5' }}><h6>Язык:</h6></label><br />
                        <select
                          required
                          className="form-select"
                          aria-label="Default select example"
                          value={lang}
                          onChange={(e) => setLang(e.target.value)}
                        >
                          <option value='' name='' style={{ color: '#791cb5' }} disabled defaultValue hidden>Язык</option>
                          <option value='RU' name='RU' style={{ color: '#791cb5' }}>Русский</option>
                          <option value='UZ' name="UZ" style={{ color: '#791cb5' }}>Узбекский</option>
                        </select>
                      </div>
                    </div>

                  </div>





                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Телефон:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='phone'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Коментарий:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='comment'
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Договор:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='contract'
                      value={contract}
                      onChange={(e) => setContract(e.target.value)}
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Оплата 100%</h6></label>
                    <input
                      type="text"
                      className="form-control"

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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>ФИО:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='editName'
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
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
                          value={editCategory}
                          onChange={(e) => setEditCategory(e.target.value)}
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
                          value={editShift}
                          onChange={(e) => setEditShift(e.target.value)}
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
                          value={editLang}
                          onChange={(e) => setEditLang(e.target.value)}
                        >
                          <option value='RU' name='RU' style={{ color: '#791cb5' }}>RU</option>
                          <option value='UZ' name="UZ" style={{ color: '#791cb5' }}>UZ</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Телефон:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='editPhone'
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Коментарий:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='editComment'
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Договор:</h6></label>
                    <input
                      type="text"
                      className="form-control"

                      name='editContract'
                      value={editContract}
                      onChange={(e) => setEditContract(e.target.value)}
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
                    <label htmlFor="recipient-name" className="col-form-label" style={{ color: '#4caf21' }}><h6>Оплата 100%</h6></label>
                    <input
                      type="text"
                      className="form-control"

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

export default TableCandidate
