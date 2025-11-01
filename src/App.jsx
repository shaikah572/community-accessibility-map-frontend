import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { getUserFromToken } from './lib/auth'
import './App.css'

import MapDisplay from './components/MapDisplay/MapDisplay'
import Login from './components/Auth/Login'

const App = () => {
 
  const [user, setUser] = useState(getUserFromToken())

  return (
    <Router>
      <Routes>
        <Route path='/login' element={ <Login setUser={setUser} />} />
        <Route path='/' element={<MapDisplay user={user} />} />
      </Routes>
    </Router>
  )
}

export default App