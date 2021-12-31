import {
  AUDIENCE_ADD_FAIL,
  AUDIENCE_ADD_REQUEST,
  AUDIENCE_ADD_SUCCESS,

  AUDIENCE_DELETE_FAIL,
  AUDIENCE_DELETE_REQUEST,
  AUDIENCE_DELETE_SUCCESS,

  AUDIENCE_UPDATE_FAIL,
  AUDIENCE_UPDATE_REQUEST,
  AUDIENCE_UPDATE_SUCCESS
} from "../constants/audienceConstants";

export const audienceInfoReducer = (state = { audiences: [] }, action) => {
  switch (action.type) {
    case AUDIENCE_ADD_REQUEST:
      return { ...state, loading: true }
    case AUDIENCE_ADD_SUCCESS:
      return {
        ...state,
        audiences: [...state.audiences, action.payload]
      }
    case AUDIENCE_ADD_FAIL:
      return { ...state, loading: false, error: action.payload }


    // ---------------------------------------------------------

    case AUDIENCE_UPDATE_REQUEST:
      return { ...state, loading: true }

    case AUDIENCE_UPDATE_SUCCESS:
      console.log(action.payload, 'AUDIENCE_UPDATE_SUCCESS');
      return {
        ...state,
        audiences: state.audiences.map((item) => {
          if (item.number === action.payload.numberToUpdate.number) {
            return {
              number: action.payload.number,
              name: action.payload.name,
              responsible: action.payload.responsible,
            }
          } else {
            return item
          }
        }),
        loading: false
      }
    case AUDIENCE_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }

    // ---------------------------------------------------------
    case AUDIENCE_DELETE_REQUEST:
      return { ...state, loading: false }

    case AUDIENCE_DELETE_SUCCESS:
      return {
        ...state,
        audiences: state.audiences.filter((item, index) => index + 1 !== action.payload)
      }

    case AUDIENCE_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }


    default:
      return state
  }
}