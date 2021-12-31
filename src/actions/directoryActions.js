// import axios from 'axios';
import {
  DIRECTORY_ADD_REQUEST,
  DIRECTORY_ADD_SUCCESS,
  DIRECTORY_ADD_FAIL,

  DIRECTORY_UPDATE_REQUEST,
  DIRECTORY_UPDATE_SUCCESS,
  DIRECTORY_UPDATE_FAIL,

  DIRECTORY_DELETE_REQUEST,
  DIRECTORY_DELETE_SUCCESS,
  DIRECTORY_DELETE_FAIL,

} from '../constants/directoryConstants';

export const saveDirectoryInfo = (dataForm) => (dispatch, getState) => {
  try {
    dispatch({
      type: DIRECTORY_ADD_REQUEST,
    })
    // const { data } = axios.post(`/api/directory/directory`, dataForm)
    // console.log(data);

    dispatch({
      type: DIRECTORY_ADD_SUCCESS,
      payload: dataForm
      // payload: data
    })
    localStorage.setItem('directories', JSON.stringify(getState().directoryInfo.directories))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: DIRECTORY_ADD_FAIL,
      payload: message
    })
  }
}


export const updateDirectoryInfo = (editDataForm) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DIRECTORY_UPDATE_REQUEST
    })
    // const { data } = axios.put(`/api/directory/directory/${id}`, editDataForm)
    // console.log(data);
    dispatch({
      type: DIRECTORY_UPDATE_SUCCESS,
      payload: editDataForm
    })
    localStorage.setItem('directories', JSON.stringify(getState().directoryInfo.directories))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: DIRECTORY_UPDATE_FAIL, payload: message })
  }
}


export const deleteDirectoryInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DIRECTORY_DELETE_REQUEST
    })

    // const { data } = await axios.deleteStaffInfo(`/api/directory/directory/${id}`)
    // console.log(data);

    dispatch({
      type: DIRECTORY_DELETE_SUCCESS,
      payload: id
    })
    localStorage.setItem('directories', JSON.stringify(getState().directoryInfo.directories))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: DIRECTORY_DELETE_FAIL,
      payload: message
    })
  }
}





// export const updateDirectoryInfo = (editDirectoryInfo) => async (dispatch, getState) => {
//   dispatch({
//     type: UPDATE_DIRECTORY_INFO,
//     payload: editDirectoryInfo
//   })
//   localStorage.setItem('directories', JSON.stringify(getState().directoryInfo.directories))
// }



