import {

  DIRECTORY_ADD_REQUEST,
  DIRECTORY_ADD_SUCCESS,
  DIRECTORY_ADD_FAIL,

  DIRECTORY_UPDATE_REQUEST,
  DIRECTORY_UPDATE_SUCCESS,
  DIRECTORY_UPDATE_FAIL,

  DIRECTORY_DELETE_REQUEST,
  DIRECTORY_DELETE_SUCCESS,
  DIRECTORY_DELETE_FAIL,

} from '../constants/directoryConstants'

// ---------------------------------------------------------
// ------------DIRECTORY_ADD-----------------------------
// ---------------------------------------------------------
export const directoryInfoReducer = (state = { directories: [] }, action) => {
  switch (action.type) {
    case DIRECTORY_ADD_REQUEST:
      return { ...state, loading: true }
    case DIRECTORY_ADD_SUCCESS:
      return {
        ...state,
        directories: [...state.directories, action.payload]
      }
    case DIRECTORY_ADD_FAIL:
      return { ...state, loading: false, error: action.payload }
    // ---------------------------------------------------------
    // ------------DIRECTORY_UPDATE-----------------------------
    // ---------------------------------------------------------

    case DIRECTORY_UPDATE_REQUEST:
      return { ...state, loading: true }

    case DIRECTORY_UPDATE_SUCCESS:
      console.log(action.payload, 'DIRECTORY_UPDATE_SUCCESS');
      return {
        ...state,
        directories: state.directories.map((item) => {
          if (item.position === action.payload.positionToUpdate.position) {
            return {
              position: action.payload.position,
              additionally: action.payload.additionally,
            }
          } else {
            return item
          }
        }),
        loading: false
      }
    case DIRECTORY_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload }
    // ---------------------------------------------------------
    // ------------DIRECTORY_DELETE-----------------------------
    // ---------------------------------------------------------
    case DIRECTORY_DELETE_REQUEST:
      return { ...state, loading: false }

    case DIRECTORY_DELETE_SUCCESS:
      return {
        ...state,
        directories: state.directories.filter((item, index) => index + 1 !== action.payload)
      }

    case DIRECTORY_DELETE_FAIL:
      return {
        ...state, loading: false, error: action.payload
      }

    default:
      return state
  }
}


// export const directoryInfoReducer = (state = { directories: [] }, action) => {
//   switch (action.type) {
//     case DIRECTORY_INFO:
//       return {
//         ...state,
//         directories: [...state.directories, action.payload]
//       }

//     case DELETE_DIRECTORY_INFO:
//       return {
//         ...state,
//         directories: state.directories.filter((item, index) => index + 1 !== action.payload)
//       }

//     case UPDATE_DIRECTORY_INFO:
//       console.log('update', action.payload);
//       return {
//         ...state,
//         directories: state.directories.map(item => {
//           if (item.position === action.payload.positionToUpdate) {
//             return {
//               position: action.payload.updatePosition,
//               additionally: action.payload.updateAdditionally
//             };
//           } else {
//             return item;
//           }
//         })
//       }


//     default:
//       return state
//   }
// }
