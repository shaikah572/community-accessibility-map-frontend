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
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login