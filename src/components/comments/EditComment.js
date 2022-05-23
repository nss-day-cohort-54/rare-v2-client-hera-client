import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getSingleComment, updateComment } from "./CommentManager"

export const EditComment = () => {
    
    const {commentId} = useParams()
    const history = useHistory()
    const [newComment, setComment] = useState("")
    const {postId} = useParams()
       


useEffect(
    () => {
        getSingleComment(commentId)
        .then((data => {
            setComment(data)
        }))
    },
    [ commentId ]
)

const submitComment = () => {
    if (newComment.length > 0) {

        const copy = {}
        copy.content = newComment
        // gets comment content from state
        // adds postId
        console.log(copy)
        copy.post = postId
        copy.created_on = (new Date()).toISOString().split('T')[0],
            copy.author = parseInt(localStorage.getItem("token"))
        // adds current user id
        // sends to database using function from CommentManager
        updateComment(copy, commentId)
        .then(() => history.push(`/posts/single/${postId}/comments`))
            // .then(() => getComments(postId))
        // refresh comment list
    } else {
        window.alert("Please fill out your comment before submitting.")
    }
}
return <>
    {/* 
        textarea form input
        button to submit comment
    */}

    <label htmlFor="content">Edit Current Comment:</label><br></br>
    <textarea id="content" name="content"
        onChange={(e) => setComment(e.target.value)}
        value={newComment.content}>
    </textarea><br></br>
    <button className="commentSubmit" onClick={() => submitComment()}>
        Submit Comment
    </button>
    <br></br><br></br>
    <button onClick={() => history.push(`/posts/single/${postId}`)}>
        Back to Post
    </button>
</>




}