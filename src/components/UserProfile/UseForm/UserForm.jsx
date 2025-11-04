import { useState, useEffect } from 'react'
import { authRequest } from '../../../lib/auth'
import { useNavigate } from 'react-router'

const UserForm = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    })

    const getUser = async () => {
        try {
            const response = await authRequest({
                method: 'get',
                url: 'http://127.0.0.1:8000/api/user/'
            })
            setFormData(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await authRequest({
                method: 'put',
                url: 'http://127.0.0.1:8000/api/user/',
                data: formData
            })
            if (response.status === 201 || response.status === 200) {
                navigate(`/profile`)
            }
        } catch (error) {
            console.error(error)
        }


    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 w-screen">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit Profile </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            value={formData.username}
                            onChange={handleChange}
                            id="username"
                            name="username"
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"/>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"/>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )

}

export default UserForm