import React from 'react'
import { clearTokens } from '../../lib/auth'
import { useNavigate } from 'react-router'

const Logout = ({ setUser }) => {
    const navigate = useNavigate()
    function handleLogOut() {
        clearTokens()
        setUser(null)
        navigate('/login')
    }
    return (
        <div>
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}

export default Logout