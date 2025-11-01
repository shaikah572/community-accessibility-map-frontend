import { useState } from 'react'
import { authRequest } from '../../../lib/auth'


const CommentForm = ({ markerId }) => {

    const [formData, setFormData] = useState({
        text: '',
        image: null
    })

    // stackoverflow > "How to post a file from a form with Axios"
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.name === 'image' ? event.target.files[0] : event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const data = new FormData()
            data.append('text', formData.text)
            if (formData.image) data.append('image', formData.image)
            const response = await authRequest({
                method: 'post',
                url: `http://127.0.0.1:8000/api/markers/${markerId}/comments/`,
                data: data
            })
        } catch (error) {
            console.error(error)
        }
    }


    return (
        // TODO: styling
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='text'>Comment:</label>
                <input value={formData.text} onChange={handleChange} id='text' name='text' />
            </div>
            <div>
                <label htmlFor='image'>Image:</label>
                <input type='file' id='image' name='image' accept='image/*' onChange={handleChange}
                />
            </div>

            <button type='submit'>Submit</button>

        </form>
    )
}

export default CommentForm