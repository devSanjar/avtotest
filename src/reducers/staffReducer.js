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
  STAFF_UPDATE_FAIL,

} from '../constants/staffConstants'

export const staffAddInfoReducer = (state = { staff: [], loading: false, error: '' }, action) => {
  switch (action.type) {
    // case ADD_TEST:
    //   return {s
    //     ...state,
    //     staff: [...state.staff, action.payload]
    //   }
    case ADD_STAFF_REQUEST:
      return { ...state, loading: true }
    case ADD_STAFF_SUCCESS:
      console.log('reducer', action.payload);
      return {
        ...state,
        staff: [...state.staff, action.payload],
        loading: false,
      }
    case ADD_STAFF_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }


    case STAFF_DELETE_REQUEST:
      return { ...state, loading: true }
    case STAFF_DELETE_SUCCESS:
      return {
        ...state,
        staff: state.staff.filter((item, index) => index + 1 !== action.payload)
      }
    case STAFF_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload }


    case STAFF_UPDATE_REQUEST:
      return { ...state, loading: true }
    case STAFF_UPDATE_SUCCESS:
      // console.log('staff_update', action.payload);
      return {
        ...state,
        staff: state.staff.map((item) => {
          if (item.name === action.payload.staffToUpdate) {
            return {
              name: action.payload.updateName,
              position: action.payload.updatePosition,
              login: action.payload.updateLogin,
              password: action.payload.updatePassword,
              activity: action.payload.updateActivity,
            }
          } else {
            return item
          }
        }),
        loading: false
      }
    case STAFF_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }



    default:
      return state

  }
}