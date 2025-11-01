import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const Signup = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await axios.post('http://127.0.0.1:8000/api/signup/', { username, email, password })
            navigate('/login')
        } catch (error) {
            console.error(error)
            alert('Signup failed')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
            <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit'>Sign Up</button>
        </form>
    )
}

export default Signup