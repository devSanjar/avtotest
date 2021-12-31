import {
  INACTIVE_GROUP_ADD_REQUEST,
  INACTIVE_GROUP_ADD_SUCCESS,
  INACTIVE_GROUP_ADD_FAIL,

  INACTIVE_GROUP_UPDATE_REQUEST,
  INACTIVE_GROUP_UPDATE_SUCCESS,
  INACTIVE_GROUP_UPDATE_FAIL,

  INACTIVE_GROUP_DELETE_REQUEST,
  INACTIVE_GROUP_DELETE_SUCCESS,
  INACTIVE_GROUP_DELETE_FAIL,
} from '../constants/InActiveGroupConstants'

export const addInactiveGroup = (addGroupData) => (dispatch, getState) => {
  try {
    dispatch({
      type: INACTIVE_GROUP_ADD_REQUEST,
    })

    // const { data } = axios.post(`/api/group/members`, addGroupData)
    // console.log(data);

    dispatch({
      type: INACTIVE_GROUP_ADD_SUCCESS,
      payload: addGroupData
      // payload: data
    })
    localStorage.setItem('inActiveGroup', JSON.stringify(getState().InActiveGroupInfo.inActiveGroup))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: INACTIVE_GROUP_ADD_FAIL,
      payload: message
    })
  }
}


export const editInActiveGroup = (editGroupData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INACTIVE_GROUP_UPDATE_REQUEST
    })
    // const { data } = axios.put(`/api/group/members/${id}`, editGroupData)
    // console.log(data);
    dispatch({
      type: INACTIVE_GROUP_UPDATE_SUCCESS,
      payload: editGroupData
    })
    localStorage.setItem('inActiveGroup', JSON.stringify(getState().InActiveGroupInfo.inActiveGroup))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: INACTIVE_GROUP_UPDATE_FAIL, payload: message })
  }
}


export const deleteInActiveGroupInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INACTIVE_GROUP_DELETE_REQUEST
    })

    // const { data } = await axios.deleteStaffInfo(`/api/directory/audience/${id}`)
    // console.log(data);

    dispatch({
      type: INACTIVE_GROUP_DELETE_SUCCESS,
      payload: id
    })
    localStorage.setItem('inActiveGroup', JSON.stringify(getState().InActiveGroupInfo.inActiveGroup))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: INACTIVE_GROUP_DELETE_FAIL,
      payload: message
    })
  }
}
