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
            console.log(error)
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

            {
                comments.map(comment => {
                    return <div>
                        {/* TODO: style comment section + image sizing + style button */}
                        <p>{comment.text}</p>
                        {
                            comment.image ?
                                <img src={`http://127.0.0.1:8000/${comment.image}`} width={200} alt="" /> : ''
                        }
                        <p>{comment.created_by.username} - {comment.date}</p>
                        {
                            user.user_id == comment.created_by.id ? <button type='button' onClick={() => handleDeleteComment(comment.id)}>Delete</button> : ''
                        }
                        <hr />
                    </div>
                })
            }
        </>
    )
}

export default CommentsDisplay