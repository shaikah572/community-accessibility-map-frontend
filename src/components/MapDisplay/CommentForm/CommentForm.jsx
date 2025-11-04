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
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Add a Comment</h2>

            <div className="flex flex-col gap-2">
                <label htmlFor="text" className="text-sm font-medium text-gray-700">
                    Comment
                </label>
                <input
                    value={formData.text}
                    onChange={handleChange}
                    id="text"
                    name="text"
                    placeholder="Write your comment..."
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="image" className="text-sm font-medium text-gray-700">
                    Image (optional)
                </label>
                <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200" />
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200" >
                Submit
            </button>
        </form>
    )

}

export default CommentForm