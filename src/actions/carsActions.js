import {
  CARS_ADD_REQUEST,
  CARS_ADD_SUCCESS,
  CARS_ADD_FAIL,

  CARS_UPDATE_REQUEST,
  CARS_UPDATE_SUCCESS,
  CARS_UPDATE_FAIL,

  CARS_DELETE_REQUEST,
  CARS_DELETE_SUCCESS,
  CARS_DELETE_FAIL,
} from '../constants/carsConstants'


export const addCars = (dataForm) => (dispatch, getState) => {
  try {
    dispatch({
      type: CARS_ADD_REQUEST,
    })
    // const { data } = axios.post(`/api/directory/cars`, dataForm)
    // console.log(data);
    dispatch({
      type: CARS_ADD_SUCCESS,
      payload: dataForm
      // payload: data
    })
    localStorage.setItem('cars', JSON.stringify(getState().carsInfo.cars))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: CARS_ADD_FAIL,
      payload: message
    })
  }
}

export const editCarsInfo = (editData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CARS_UPDATE_REQUEST
    })
    // const { data } = axios.put(`/api/directory/cars/${id}`, editData)
    // console.log(data);
    dispatch({
      type: CARS_UPDATE_SUCCESS,
      payload: editData
    })
    localStorage.setItem('cars', JSON.stringify(getState().carsInfo.cars))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: CARS_UPDATE_FAIL, payload: message })
  }
}

export const deleteCarsInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CARS_DELETE_REQUEST
    })

    // const { data } = await axios.deleteStaffInfo(`/api/directory/cars/${id}`)
    // console.log(data);

    dispatch({
      type: CARS_DELETE_SUCCESS,
      payload: id
    })
    localStorage.setItem('cars', JSON.stringify(getState().carsInfo.cars))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: CARS_DELETE_FAIL,
      payload: message
    })
  }
}
