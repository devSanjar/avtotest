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

// ---------------------------------------------------------
//                INACTIVE_GROUP_ADD_CONTRACTS
// ---------------------------------------------------------
export const InActGroupContractInfoReducer = (state = { contracts: [] }, action) => {
  switch (action.type) {
    case INACTIVE_CONTRACTS_ADD_REQUEST:
      return { ...state, loading: true }
    case INACTIVE_CONTRACTS_ADD_SUCCESS:
      return {
        ...state,
        contracts: [...state.contracts, action.payload],
        loading: false,
      }
    case INACTIVE_CONTRACTS_ADD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    // ---------------------------------------------------------
    //                INACTIVE_GROUP_UPDATE_CONTRACTS
    // ---------------------------------------------------------
    case INACTIVE_CONTRACTS_UPDATE_REQUEST:
      return { ...state, loading: true }

    case INACTIVE_CONTRACTS_UPDATE_SUCCESS:
      return {
        ...state,
        contracts: state.contracts.map((item) => {
          if (item.name === action.payload.nameToUpdate.name) {
            return {
              name: action.payload.name,
              number: action.payload.number,
              date: action.payload.date,
              total: action.payload.total,
              paid: action.payload.paid,
              company: action.payload.company,
              totalPeople: action.payload.totalPeople,
            }
          } else {
            return item
          }
        }),
        loading: false,
      }

    case INACTIVE_CONTRACTS_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    // ---------------------------------------------------------
    //                INACTIVE_СONTRACT_DELETE
    // ---------------------------------------------------------

    case INACTIVE_CONTRACTS_DELETE_REQUEST:
      return { ...state, loading: true, }
    case INACTIVE_CONTRACTS_DELETE_SUCCESS:
      return {
        ...state,
        contracts: state.contracts.filter((item, index) => index + 1 !== action.payload),
        loading: false
      }

    case INACTIVE_CONTRACTS_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    default:
      return state
  }
}