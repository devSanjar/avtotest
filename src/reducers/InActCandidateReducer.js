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

// ---------------------------------------------------------
//                INACTIVE_GROUP_ADD_CANDIDATE
// ---------------------------------------------------------
export const InActGroupCandidateInfoReducer = (state = { candidates: [] }, action) => {
  switch (action.type) {
    case INACTIVE_CANDIDATE_ADD_REQUEST:
      return { ...state, loading: true }
    case INACTIVE_CANDIDATE_ADD_SUCCESS:
      return {
        ...state,
        candidates: [...state.candidates, action.payload],
        loading: false
      }
    case INACTIVE_CANDIDATE_ADD_FAIL:
      return { ...state, loading: false, error: action.payload }

    // ---------------------------------------------------------
    //                INACTIVE_GROUP_UPDATE_CANDIDATE
    // ---------------------------------------------------------

    case INACTIVE_CANDIDATE_UPDATE_REQUEST:
      return { ...state, loading: true }

    case INACTIVE_CANDIDATE_UPDATE_SUCCESS:
      console.log(action.payload, 'INACTIVE_CANDIDATE_UPDATE_SUCCESS');
      return {
        ...state,
        candidates: state.candidates.map((item) => {
          if (item.name === action.payload.nameToUpdate.name) {
            return {
              name: action.payload.name,
              category: action.payload.category,
              shift: action.payload.shift,
              lang: action.payload.lang,
              phone: action.payload.phone,
              date: action.payload.date,
              comment: action.payload.comment,
              contract: action.payload.contract,
              paid: action.payload.paid,
              payment: action.payload.payment
            }
          } else {
            return item
          }
        }),
        loading: false
      }
    case INACTIVE_CANDIDATE_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }


    // ---------------------------------------------------------
    //                INACTIVE_CANDIDATE_DELETE
    // ---------------------------------------------------------
    case INACTIVE_CANDIDATE_DELETE_REQUEST:
      return { ...state, loading: true }

    case INACTIVE_CANDIDATE_DELETE_SUCCESS:
      return {
        ...state,
        candidates: state.candidates.filter((item, index) => index + 1 !== action.payload)
      }

    case INACTIVE_CANDIDATE_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }


    default:
      return state
  }
}
