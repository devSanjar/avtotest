// import axios from 'axios'
import {
  SUBJECT_ADD_REQUEST,
  SUBJECT_ADD_SUCCESS,
  SUBJECT_ADD_FAIL,

  SUBJECT_UPDATE_REQUEST,
  SUBJECT_UPDATE_SUCCESS,
  SUBJECT_UPDATE_FAIL,

  SUBJECT_DELETE_REQUEST,
  SUBJECT_DELETE_SUCCESS,
  SUBJECT_DELETE_FAIL,
} from '../constants/subjectConstants'

export const addSubject = (dataData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBJECT_ADD_REQUEST,
    })
    // const { data } = axis.post(`/api/directory/subjects`, dataData)
    // console.log('data in subjectActions', data);
    dispatch({
      type: SUBJECT_ADD_SUCCESS,
      payload: dataData
      // payload: data,
    })
    localStorage.setItem('subjects', JSON.stringify(getState().subjectInfo.subjects))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: SUBJECT_ADD_FAIL,
      payload: message
    })
  }

}

export const deleteStaffInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBJECT_DELETE_REQUEST
    })

    // const { data } = await axios.deleteStaffInfo(`/api/directory/subject/${id}`)
    // console.log(data);

    dispatch({
      type: SUBJECT_DELETE_SUCCESS,
      payload: id
    })
    localStorage.setItem('subjects', JSON.stringify(getState().subjectInfo.subjects))



  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: SUBJECT_DELETE_FAIL,
      payload: message
    })
  }
}

export const editSub = (editData) => async (dispatch, getState) => {
  // console.log('editSub0, ', editData);
  try {
    dispatch({
      type: SUBJECT_UPDATE_REQUEST
    })
    // const { data } = axios.put(`/api/directory/subjects/${id}`)
    // console.log(data);


    dispatch({
      type: SUBJECT_UPDATE_SUCCESS,
      payload: editData
    })

    localStorage.setItem('subjects', JSON.stringify(getState().subjectInfo.subjects))
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: SUBJECT_UPDATE_FAIL, payload: message })
  }

}