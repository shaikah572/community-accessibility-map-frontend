import { useState, useEffect } from 'react'
import axios from 'axios'
import CommentForm from './CommentForm/CommentForm'

const CommentsDisplay = ({ markerId }) => {

    const [comments, setComments] = useState([])

    const getAllComments = async () =>{
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/markers/${markerId}/comments/`)
            console.log(response.data)
            setComments(response.data)
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAllComments()
    }, [])

    return (
        <>
            <CommentForm />
            {
                comments.map(comment => {
                    return <div>
                        {/* TODO: style comment section + image sizing */}
                        <p>{comment.text}</p>
                        {
                            comment.image ? 
                            <img src={`http://127.0.0.1:8000/${comment.image}`} width={200} alt="" /> : ''
                        }
                        <p>{comment.created_by.username} - {comment.date}</p>
                        <hr />
                        </div>
                })
            }
        </>
    )
}

export default CommentsDisplay