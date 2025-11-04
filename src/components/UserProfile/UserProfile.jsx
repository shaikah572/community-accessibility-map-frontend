import { useState, useEffect } from 'react'
import { authRequest, clearTokens } from '../../lib/auth'
import { Link, useNavigate } from 'react-router'


const UserProfile = ({ setUser }) => {

    const navigate = useNavigate()
    const [userInformations, setUserInformations] = useState({})

    const getUserInformations = async () => {
        try {
            const response = await authRequest({
                method: 'get',
                url: 'http://127.0.0.1:8000/api/user/'
            })
            console.log(response.data)
            setUserInformations(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUserInformations()
    }, [])

    const handleDeleteAccount = async () => {
        const isConfirmed = confirm('Are you sure you want to delete account?')

        if (isConfirmed) {
            try {
                await authRequest({
                    method: 'delete',
                    url: `http://127.0.0.1:8000/api/user/delete/`
                })
                clearTokens()
                setUser(null)
                navigate('/')
            } catch (error) {
                console.error(error)
            }

        }
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 w-screen">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">Profile</h1>

                <div className="space-y-3 mb-6">
                    <p className="text-lg text-gray-700">
                        <span className="font-medium text-gray-500">Username:</span> {userInformations.username}
                    </p>
                    <p className="text-lg text-gray-700">
                        <span className="font-medium text-gray-500">Email:</span> {userInformations.email}
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    <Link to="/profile/edit">
                        <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300">
                            Update Information
                        </button>
                    </Link>

                    <button
                        type="button"
                        onClick={() => handleDeleteAccount()}
                        className="bg-gradient-to-r from-red-400 to-red-600 text-white font-medium px-5 py-2 rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile