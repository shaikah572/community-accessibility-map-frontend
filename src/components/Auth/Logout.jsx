import React from 'react'
import { clearTokens } from '../../lib/auth'
import { useNavigate } from 'react-router'
import { LogOut } from 'lucide-react'
const Logout = ({ setUser }) => {
    const navigate = useNavigate()
    function handleLogOut() {
        clearTokens()
        setUser(null)
        navigate('/login')
    }
    return (
            <button onClick={handleLogOut} className='py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
                <LogOut className='w-3 h-3'/>
                </button>
    )
}

export default Logout