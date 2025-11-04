// Tailwind CSS styling refrences > "https://flowbite.com/"

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { getUserFromToken } from './lib/auth'

import NavBar from './components/NavBar/NavBar'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import UserProfile from './components/UserProfile/UserProfile'
import UserForm from './components/UserProfile/UseForm/UserForm'
import MapDisplay from './components/MapDisplay/MapDisplay'
import MarkerForm from './components/MarkerForm/MarkerForm'
import AboutPage from './components/AboutPage/AboutPage'
import ContactPage from './components/ContactPage/ContactPage'

import ProtectedRoute from './components/Auth/ProtectedRoute'

const App = () => {

  const [user, setUser] = useState(getUserFromToken())

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<MapDisplay user={user} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/profile' element={<ProtectedRoute>
          <UserProfile setUser={setUser} />
        </ProtectedRoute>} />
        <Route path='/profile/edit' element={<ProtectedRoute>
          <UserForm />
        </ProtectedRoute>} />
        <Route path='/add-marker' element={<ProtectedRoute>
          <MarkerForm />
        </ProtectedRoute>} />

      </Routes>
    </Router>
  )
}

export default App