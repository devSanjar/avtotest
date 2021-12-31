// import axios from 'axios';
import {
  // ADD_TEST,
  ADD_STAFF_REQUEST,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAIL,

  STAFF_DELETE_REQUEST,
  STAFF_DELETE_SUCCESS,
  STAFF_DELETE_FAIL,

  STAFF_UPDATE_REQUEST,
  STAFF_UPDATE_SUCCESS,
  STAFF_UPDATE_FAIL

} from '../constants/staffConstants'

export const addStaff = (dataStaff) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_STAFF_REQUEST,
    })
    // const { data } = await axios.post('/api/directory/staff', dataStaff)
    // console.log('data in staffAction', data);

    dispatch({
      type: ADD_STAFF_SUCCESS,
      // payload: data
      payload: dataStaff
    })
    // localStorage.setItem('staff', JSON.stringify(getState().staffAddInfo.staff))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: ADD_STAFF_FAIL, payload: message })
  }
}

export const deleteStaffInfo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: STAFF_DELETE_REQUEST
    })

    // await axios.delete(`/api/staff/${id}`)

    dispatch({
      type: STAFF_DELETE_SUCCESS,
      payload: id
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: STAFF_DELETE_FAIL,
      payload: message
    })
  }

  dispatch({
    type: STAFF_DELETE_SUCCESS,
    payload: id
  })
}

export const updateStaffInfo = (updateStaff) => async (dispatch) => {
  try {
    dispatch({
      type: STAFF_UPDATE_REQUEST
    })

    // const { data } = axios.put(`/api/directory/staff/${id}`, updateStaff)
    // console.log('data in staffAction.js', data);

    dispatch({
      type: STAFF_UPDATE_SUCCESS,
      // payload: data
      payload: updateStaff
    })

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: STAFF_UPDATE_FAIL, payload: message })
  }

}