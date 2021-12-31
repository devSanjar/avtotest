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


// ---------------------------------------------------------
//                INACTIVE_GROUP_ADD
// ---------------------------------------------------------
export const InActiveGroupInfoReducer = (state = { inActiveGroup: [] }, action) => {
  switch (action.type) {
    case INACTIVE_GROUP_ADD_REQUEST:
      return { ...state, loading: true }
    case INACTIVE_GROUP_ADD_SUCCESS:
      return {
        ...state,
        inActiveGroup: [...state.inActiveGroup, action.payload],
        loading: false
      }
    case INACTIVE_GROUP_ADD_FAIL:
      return { ...state, loading: false, error: action.payload }

    // ---------------------------------------------------------
    //                INACTIVE_GROUP_UPDATE
    // ---------------------------------------------------------
    case INACTIVE_GROUP_UPDATE_REQUEST:
      return { ...state, loading: true }

    case INACTIVE_GROUP_UPDATE_SUCCESS:
      console.log(action.payload, 'INACTIVE_GROUP_UPDATE_SUCCESS');
      return {
        ...state,
        inActiveGroup: state.inActiveGroup.map((item) => {
          if (item.name === action.payload.nameToUpdate.name) {
            return {
              name: action.payload.name,
              number: action.payload.number,
              category: action.payload.category,
              shift: action.payload.shift,
              lang: action.payload.lang,
              contract: action.payload.contract,
              paid: action.payload.paid,
              payment: action.payload.payment,
            }
          } else {
            return item
          }
        }),
        loading: false
      }
    case INACTIVE_GROUP_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }

    // ---------------------------------------------------------
    //                INACTIVE_GROUP_DELETE
    // ---------------------------------------------------------

    case INACTIVE_GROUP_DELETE_REQUEST:
      return { ...state, loading: true }

    case INACTIVE_GROUP_DELETE_SUCCESS:
      return {
        ...state,
        inActiveGroup: state.inActiveGroup.filter((item, index) => index + 1 !== action.payload)
      }

    case INACTIVE_GROUP_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }

    default:
      return state
  }
}