import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { getUserFromToken } from './lib/auth'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import UserProfile from './components/UserProfile/UserProfile'
import UserForm from './components/UserProfile/UseForm/UserForm'
import MapDisplay from './components/MapDisplay/MapDisplay'
import MarkerForm from './components/MarkerForm/MarkerForm'

const App = () => {
 
  const [user, setUser] = useState(getUserFromToken())

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/login' element={ <Login setUser={setUser} />} />
        <Route path='/signup' element={ <Signup />} />
        <Route path='/' element={<MapDisplay user={user} />} />
        <Route path='/profile' element={<UserProfile setUser={setUser} />} />
        <Route path='/profile/edit' element={<UserForm />} />
        <Route path='/add-marker' element={<MarkerForm/>} />

      </Routes>
    </Router>
  )
}

export default App