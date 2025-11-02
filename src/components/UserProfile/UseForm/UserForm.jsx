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
                navigate(`/profile`) }
        } catch (error) {
            console.error(error)
        }


    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='username'>Username: </label>
                <input value={formData.username} onChange={handleChange} id='username' name='username' />
            </div>
            <div>
                <label htmlFor='email'>Email: </label>
                <input value={formData.email} onChange={handleChange} type='email' id='email' name='email' />
            </div>
            <button type='submit'>Edit</button>
        </form>
        </>
    )
}

export default UserForm