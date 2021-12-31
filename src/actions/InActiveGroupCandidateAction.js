import {
  INACTIVE_CANDIDATE_ADD_REQUEST,
  INACTIVE_CANDIDATE_ADD_SUCCESS,
  INACTIVE_CANDIDATE_ADD_FAIL,

  INACTIVE_CANDIDATE_UPDATE_REQUEST,
  INACTIVE_CANDIDATE_UPDATE_SUCCESS,
  INACTIVE_CANDIDATE_UPDATE_FAIL,

  INACTIVE_CANDIDATE_DELETE_REQUEST,
  INACTIVE_CANDIDATE_DELETE_SUCCESS,
  INACTIVE_CANDIDATE_DELETE_FAIL,
} from '../constants/InActiveCandidateConstants'

// import axios from 'axios'

export const addInactiveGroupCandidate = (addInActCandidate) => (dispatch, getState) => {
  try {
    dispatch({
      type: INACTIVE_CANDIDATE_ADD_REQUEST,
    })

    // const { data } = axios.post(`/api/group/candidate`, addInActCandidate)
    // console.log(data);

    dispatch({
      type: INACTIVE_CANDIDATE_ADD_SUCCESS,
      payload: addInActCandidate
      // payload: data
    })
    localStorage.setItem('candidates', JSON.stringify(getState().InActGroupCandidateInfo.candidates))


  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: INACTIVE_CANDIDATE_ADD_FAIL,
      payload: message
    })
  }
}


export const editInActCandidate = (editData) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INACTIVE_CANDIDATE_UPDATE_REQUEST
    })
    // const { data } = axios.put(`/api/group/candidate/${id}`, editData)
    // console.log(data);

    dispatch({
      type: INACTIVE_CANDIDATE_UPDATE_SUCCESS,
      payload: editData

    })
    localStorage.setItem('candidates', JSON.stringify(getState().InActGroupCandidateInfo.candidates))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({ type: INACTIVE_CANDIDATE_UPDATE_FAIL, payload: message })
  }
}


export const deleteInActCandidateInfo = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: INACTIVE_CANDIDATE_DELETE_REQUEST
    })

    // const { data } = await axios.delete(`/api/group/candidate/${id}`)
    // console.log(data);

    dispatch({
      type: INACTIVE_CANDIDATE_DELETE_SUCCESS,
      payload: id
    })

    localStorage.setItem('candidates', JSON.stringify(getState().InActGroupCandidateInfo.candidates))

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: INACTIVE_CANDIDATE_DELETE_FAIL,
      payload: message
    })
  }
}