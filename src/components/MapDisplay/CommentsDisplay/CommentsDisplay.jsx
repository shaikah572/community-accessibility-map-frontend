import { useState, useEffect } from 'react'
import axios from 'axios'
import { authRequest } from '../../../lib/auth'

const CommentsDisplay = ({ user, markerId }) => {

    const [comments, setComments] = useState([])

    const getAllComments = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/markers/${markerId}/comments/`)
            setComments(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getAllComments()
    }, [])

    const handleDeleteComment = async (commentId) => {
        const isConfirmed = confirm('Are you sure you want to delete comment?')

        if (isConfirmed) {
            try {
                await authRequest({
                    method: 'delete',
                    url: `http://127.0.0.1:8000/api/markers/${markerId}/comments/${commentId}/`
                })
            } catch (error) {
                console.error(error)
            }

        }
    }

    return (
        <>
            {comments.map(comment => {
                return (
                    <div
                        key={comment.id}
                        className='bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3 shadow-sm' >
                        <p className='text-gray-800 text-sm mb-2'>{comment.text}</p>

                        {comment.image ? (
                            <img
                                src={`http://127.0.0.1:8000/${comment.image}`}
                                width={200}
                                alt=''
                                className='rounded-md mb-2'/>) : ( '' )}

                        <p className='text-xs text-gray-500 mb-2'>
                            {comment.created_by.username} - {comment.date}
                        </p>

                        {user.user_id == comment.created_by.id ? (
                            <button
                                type='button'
                                onClick={() => handleDeleteComment(comment.id)}
                                className='text-xs text-red-500 hover:text-red-600 font-medium transition-colors'>
                                Delete
                            </button>) : ( '' )}
                    </div>
                )
            })}
        </>
    )

}

export default CommentsDisplay