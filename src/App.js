import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Header from './components/Header'

import HomeScreen from './screens/UserScreen'
import DirectoryScreen from './screens/DirectoryScreen'
import DirectoryFirst from './screens/DirectoryFirst'

import StaffScreen from './screens/directory/StaffScreen'
import SubjectsScreen from './screens/directory/SubjectsScreen'
import AudienceScreen from './screens/directory/AudienceScreen'
import CarsScreen from './screens/directory/CarsScreen'

import GroupFirst from './screens/GroupFirst'
import InActiveScreen from './screens/group/InActiveScreen'
import CandidateScreen from './screens/group/CandidateScreen'
import ContractsScreen from './screens/group/ContractsScreen'

import ActiveScreen from './screens/group/ActiveScreen'

import './App.css';



function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Route path='/' component={HomeScreen} exact />
      <Route path='/directory' component={DirectoryFirst} exact />
      <Route path='/directory/position' component={DirectoryScreen} />
      <Route path='/directory/staff' component={StaffScreen} />
      <Route path='/directory/subjects' component={SubjectsScreen} />
      <Route path='/directory/audience' component={AudienceScreen} />
      <Route path='/directory/cars' component={CarsScreen} />

      <Route path='/group' component={GroupFirst} exact />
      <Route path='/group/members' component={InActiveScreen} />
      <Route path='/group/candidates' component={CandidateScreen} />
      <Route path='/group/contracts' component={ContractsScreen} />

      <Route path='/group/active/members' component={ActiveScreen} />
    </Router>
  )
}

export default App;
