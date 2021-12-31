import {
  AUDIENCE_ADD_REQUEST,
  AUDIENCE_ADD_SUCCESS,
  AUDIENCE_ADD_FAIL,

  AUDIENCE_UPDATE_REQUEST,
  AUDIENCE_UPDATE_SUCCESS,
  AUDIENCE_UPDATE_FAIL,
  AUDIENCE_DELETE_REQUEST,
  AUDIENCE_DELETE_SUCCESS,
  AUDIENCE_DELETE_FAIL,


} from '../constants/audienceConstants'

export const addAudience = (dataAudienceForm) => (dispatch, getState) => {
  try {
    dispatch({
      type: AUDIENCE_ADD_REQUEST,
    })

    // const { data } = axios.post(`/api/directory/audience`, dataAudienceForm)
    // console.log(data);
    dispatch({
      type: AUDIENCE_ADD_SUCCESS,
      payload: dataAudienceForm
      // payload: data
    })
    localStorage.setItem('audiences', JSON.stringify(getState().audienceInfo.audiences))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: AUDIENCE_ADD_FAIL,
      payload: message
    })
  }
}


export const editNumberInfo = (editData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AUDIENCE_UPDATE_REQUEST
    })
    // const { data } = axios.put(`/api/directory/audience/${id}`, editData)
    // console.log(data);
    dispatch({
      type: AUDIENCE_UPDATE_SUCCESS,
      payload: editData
    })
    localStorage.setItem('audiences', JSON.stringify(getState().audienceInfo.audiences))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: AUDIENCE_UPDATE_FAIL, payload: message })
  }
}

export const deleteAudienceInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: AUDIENCE_DELETE_REQUEST
    })

    // const { data } = await axios.deleteStaffInfo(`/api/directory/audience/${id}`)
    // console.log(data);

    dispatch({
      type: AUDIENCE_DELETE_SUCCESS,
      payload: id
    })
    localStorage.setItem('audiences', JSON.stringify(getState().audienceInfo.audiences))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: AUDIENCE_DELETE_FAIL,
      payload: message
    })
  }
}
