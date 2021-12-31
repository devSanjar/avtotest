import {
  INACTIVE_CONTRACTS_ADD_REQUEST,
  INACTIVE_CONTRACTS_ADD_SUCCESS,
  INACTIVE_CONTRACTS_ADD_FAIL,

  INACTIVE_CONTRACTS_UPDATE_REQUEST,
  INACTIVE_CONTRACTS_UPDATE_SUCCESS,
  INACTIVE_CONTRACTS_UPDATE_FAIL,

  INACTIVE_CONTRACTS_DELETE_REQUEST,
  INACTIVE_CONTRACTS_DELETE_SUCCESS,
  INACTIVE_CONTRACTS_DELETE_FAIL,
} from '../constants/InActiveContractConstants'

export const addInactiveGroupContracts = (data) => (dispatch, getState) => {
  try {
    dispatch({
      type: INACTIVE_CONTRACTS_ADD_REQUEST,
    })

    // const { data } = axios.post(`/api/group/contracts`, data)
    // console.log(data);

    dispatch({
      type: INACTIVE_CONTRACTS_ADD_SUCCESS,
      payload: data
      // payload: data
    })
    // localStorage.setItem('contracts', JSON.stringify(getState().InActGroupContractInfo.contracts))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: INACTIVE_CONTRACTS_ADD_FAIL,
      payload: message
    })
  }
}


export const editGroupContracts = (dataForm) => (dispatch) => {
  try {
    dispatch({
      type: INACTIVE_CONTRACTS_UPDATE_REQUEST
    })

    // const data = axios.put(`/api/group/contracts/${id}`, dataForm)
    // console.log(data);

    dispatch({
      type: INACTIVE_CONTRACTS_UPDATE_SUCCESS,
      payload: dataForm,
      // payload: data
    })

  } catch (error) {
    const message = error.response && error.response.message ? error.response.data.message : error.message

    dispatch({
      type: INACTIVE_CONTRACTS_UPDATE_FAIL,
      payload: message
    })

  }
}

export const contractInfo = (dataForm) => (dispatch) => {
  try {
    dispatch({
      type: INACTIVE_CONTRACTS_DELETE_REQUEST
    })

    // const { data } = axios.delete(`/api/group/contracts/${id}`, dataForm)
    // console.log(data);

    dispatch({
      type: INACTIVE_CONTRACTS_DELETE_SUCCESS,
      payload: dataForm
      // payload: data
    })

  } catch (error) {
    const message = error.response && error.response.message ? error.response.data.message : error.message

    dispatch({
      type: INACTIVE_CONTRACTS_DELETE_FAIL,
      payload: message
    })
  }
}