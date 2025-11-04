import React from 'react'
import { Link } from 'react-router'
import Logout from '../Auth/Logout'

function NavBar({ user, setUser }) {
  return (
    <nav>
      <Link to={'/'}>Home</Link>  
      <Link to={'/about'}>About</Link>  
      <Link to={'/contact'}>Contact</Link>  
      {
        user
          ?
          <>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/add-marker'}>
          <button>+</button>
          </Link>
          <Logout setUser={setUser} />
          </>
          :
          <>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Log In</Link>
          </>
      }
      
    </nav>
  )
}

export default NavBar