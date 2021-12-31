import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { directoryInfoReducer, } from './reducers/directoryReducer'
import { staffAddInfoReducer } from './reducers/staffReducer'
import { subjectInfoReducer } from './reducers/subjectReducer'
import { audienceInfoReducer } from './reducers/audienceReducer'
import { carsInfoReducer } from './reducers/carsReducer'

import { InActiveGroupInfoReducer } from './reducers/InActiveGroupReducer'

import { InActGroupCandidateInfoReducer } from './reducers/InActCandidateReducer'

import { InActGroupContractInfoReducer } from './reducers/InActContractReducer'

// import { audienceInfoReducer } from './reducers/audienceReducer'

const reducer = combineReducers({
  directoryInfo: directoryInfoReducer,
  staffAddInfo: staffAddInfoReducer,
  subjectInfo: subjectInfoReducer,
  audienceInfo: audienceInfoReducer,
  carsInfo: carsInfoReducer,
  InActiveGroupInfo: InActiveGroupInfoReducer,
  InActGroupCandidateInfo: InActGroupCandidateInfoReducer,
  InActGroupContractInfo: InActGroupContractInfoReducer
})


// const groupContractFromStorage = localStorage.getItem('contracts')
//   ? JSON.parse(localStorage.getItem('contracts'))
//   : []

const carsFromStorage = localStorage.getItem('cars') ? JSON.parse(localStorage.getItem('cars')) : []

const audienceFromStorage = localStorage.getItem('audiences') ? JSON.parse(localStorage.getItem('audiences')) : []

const subjectsFromStorage = localStorage.getItem('subjects') ? JSON.parse(localStorage.getItem('subjects')) : []

const directoriesFromStorage = localStorage.getItem('directories')
  ? JSON.parse(localStorage.getItem('directories'))
  : []

const inActiveGroupFromStorage = localStorage.getItem('inActiveGroup') ? JSON.parse(localStorage.getItem('inActiveGroup')) : []

const inActiveGroupCandidateFromStorage = localStorage.getItem('candidates') ? JSON.parse(localStorage.getItem('candidates')) : []

// const groupContractsfromStorage = localStorage.getItem('contracts') ? JSON.parse
//   (localStorage.getItem('contracts')) : []




const initialState = {
  directoryInfo: {
    directories: directoriesFromStorage
  },
  subjectInfo: {
    subjects: subjectsFromStorage
  },
  audienceInfo: {
    audiences: audienceFromStorage
  },
  carsInfo: {
    cars: carsFromStorage
  },
  InActiveGroupInfo: {
    inActiveGroup: inActiveGroupFromStorage
  },
  InActGroupCandidateInfo: {
    candidates: inActiveGroupCandidateFromStorage
  },
  // InActGroupContractInfo: {
  //   contracts: groupContractsfromStorage
  // },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store