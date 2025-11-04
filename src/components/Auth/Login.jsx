import { useState } from 'react'
import axios from 'axios'
import { getUserFromToken, saveTokens } from '../../lib/auth'
import { useNavigate } from 'react-router'

const Login = ({ setUser }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', { username, password })
            saveTokens(response.data.access, response.data.refresh)
            setUser(getUserFromToken())
            navigate('/')
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 w-screen">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label
                            htmlFor="username"
                            className="block mb-2 text-sm font-medium text-gray-700" >
                            Username
                        </label>
                        <input
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                            required />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-700" >
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 
              focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
                            required />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium py-3 rounded-lg 
            shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300" >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )


}

export default Login