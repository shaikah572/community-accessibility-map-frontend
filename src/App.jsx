import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { getUserFromToken } from './lib/auth'
import MapDisplay from './components/MapDisplay/MapDisplay'
import './App.css'

const App = () => {
 
  const [user, setUser] = useState(getUserFromToken())

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MapDisplay user={user} />} />
      </Routes>
    </Router>
  )
}

export default App