import React from 'react'
import { Link } from 'react-router'
import Logout from '../Auth/Logout'
import { Plus } from 'lucide-react'

function NavBar({ user, setUser }) {
    return (
        <nav className='fixed top-0 left-0 w-full border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <a href='/' class='flex items-center space-x-3 rtl:space-x-reverse'>
                    <img src='https://cdn-icons-png.flaticon.com/512/14875/14875663.png' class='h-8' alt='globe Icon' />
                    <span class='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Community Accessibbility Map</span>
                </a>
                <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg'>
                    <div className='fflex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/about'}>About</Link>
                        <Link to={'/contact'}>Contact</Link>
                        {
                            user
                                ?
                                <>
                                    <Link to={'/profile'}>Profile</Link>
                                    <Link to={'/add-marker'}>
                                        <button className='text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
                                            <Plus className='w-3 h-3'/>
                                        </button>
                                    </Link>
                                    <Logout setUser={setUser} />
                                </>
                                :
                                <>
                                    <Link to={'/signup'}>
                                    <button type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Sign Up</button>
                                    </Link>
                                    <Link to={'/login'}>
                                    <button type='button' className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Login</button>
                                    </Link>
                                </>
                        }
                    </div>

                </div>

            </div>


        </nav>
    )
}

export default NavBar