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

export const carsInfoReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case CARS_ADD_REQUEST:
      return { ...state, loading: true }
    case CARS_ADD_SUCCESS:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      }
    case CARS_ADD_FAIL:
      return { ...state, loading: false, error: action.payload }

    // ---------------------------------------------------------

    case CARS_UPDATE_REQUEST:
      return { ...state, loading: true }

    case CARS_UPDATE_SUCCESS:
      return {
        ...state,
        cars: state.cars.map((item) => {
          if (item.number === action.payload.numberToUpdate.number) {
            return {
              number: action.payload.number,
              model: action.payload.model,
              responsible: action.payload.responsible,
            }
          } else {
            return item
          }
        }),
        loading: false
      }
    case CARS_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }

    // ---------------------------------------------------------

    case CARS_DELETE_REQUEST:
      return { ...state, loading: false }

    case CARS_DELETE_SUCCESS:
      return {
        ...state,
        cars: state.cars.filter((item, index) => index + 1 !== action.payload)
      }

    case CARS_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }

    default:
      return state
  }
}