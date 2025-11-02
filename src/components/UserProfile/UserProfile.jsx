import { useState, useEffect } from 'react'
import { authRequest } from '../../lib/auth'
import { Link } from 'react-router'
import UserForm from './UseForm/UserForm'

const UserProfile = () => {

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


    return (
        <>
        <h1>profile</h1>
        <h2>{userInformations.username}</h2>
        <h2>{userInformations.email}</h2>
        <Link to='/profile/edit'>
            <button>Update Information</button>
        </Link>
        </>
    )
}

export default UserProfile