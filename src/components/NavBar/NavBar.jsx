import React from 'react'
import { Link } from 'react-router'
import Logout from '../Auth/Logout'

function NavBar({ user, setUser }) {
  return (
    <nav>
      {
        user
          ?
          <Logout setUser={setUser} />
          :
          <>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Log In</Link>
          </>
      }
      <Link to={'/'}>Home</Link>
    </nav>
  )
}

export default NavBar