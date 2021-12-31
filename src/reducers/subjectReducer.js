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


export const subjectInfoReducer = (state = { subjects: [] }, action) => {
  switch (action.type) {
    case SUBJECT_ADD_REQUEST:
      return { ...state, loading: true }
    case SUBJECT_ADD_SUCCESS:
      console.log('subjectReducer', action.payload);
      return {
        ...state,
        subjects: [...state.subjects, action.payload]
      }
    case SUBJECT_ADD_FAIL:
      return { ...state, error: action.payload }

    // ---------------------------------------------------------
    case SUBJECT_DELETE_REQUEST:
      return { ...state, loading: false }
    case SUBJECT_DELETE_SUCCESS:
      return {
        ...state,
        subjects: state.subjects.filter((item, index) => index + 1 !== action.payload)
      }
    case SUBJECT_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }

    // ---------------------------------------------------------
    case SUBJECT_UPDATE_REQUEST:
      return { ...state, loading: true }


    case SUBJECT_UPDATE_SUCCESS:
      return {
        ...state,
        subjects: state.subjects.map((item) => {
          if (item.subject === action.payload.subjectToUpdate.subject) {
            return {
              subject: action.payload.subject,
              decoding: action.payload.decoding
            }
          } else {
            return item
          }
        }),
        loading: false
      }
    case SUBJECT_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}