import { useState } from 'react'
import { authRequest } from '../../lib/auth'

const MarkerForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        lat: 0,
        lng: 0,
        category_id: 1,
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            await authRequest({
                method: 'post',
                url: 'http://127.0.0.1:8000/api/markers/',
                data: formData
            })
        } catch (error){
            console.error(error)
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Location name:</label>
                <input value={formData.name} onChange={handleChange} id='name' name='name' />
            </div>
            <div>
                <label htmlFor='description'>Descrption:</label>
                <textarea value={formData.description} onChange={handleChange} id='description' name='description' />
            </div>
            <div>
                <label htmlFor='lat'>Latitude:</label>
                <input value={formData.lat} onChange={handleChange}type='number' id='lat' name='lat' />
            </div>
            <div>
                <label htmlFor='lng'>Longitude:</label>
                <input value={formData.lng} onChange={handleChange} type='number' id='lng' name='lng' />
            </div>
            <button type='submit'>Submit</button>
        </form>
        
        </>
    )
}

export default MarkerForm