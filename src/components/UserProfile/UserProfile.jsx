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
        } catch(error){
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
        <>
        <h1>profile</h1>
        <h2>{userInformations.username}</h2>
        <h2>{userInformations.email}</h2>
        <Link to='/profile/edit'>
            <button>Update Information</button>
        </Link>
        <button type='button' onClick={() => handleDeleteAccount()}>Delete Account</button>
        </>
    )
}

export default UserProfile