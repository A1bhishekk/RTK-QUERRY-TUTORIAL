import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import Home from './components/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />




      </Routes>
    </Router>
  )
}

export default App