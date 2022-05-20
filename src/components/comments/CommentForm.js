// imports
// addComment from CommentManager
import { useState } from "react"
import { addComment } from "./CommentManager"
import { useHistory } from "react-router-dom"

// export function that handles comment form entry
export const CommentForm = ({ postId, getComments }) => {
    // declare state variable for comment to add
    const [newComment, setComment] = useState("")
    const history = useHistory()
    // should have values
    // post id
    // author of comment id (current user)
    // content

    // function to handle comment submission
    const submitComment = () => {
        if (newComment.length > 0) {

            const copy = {}
            copy.content = newComment
            // gets comment content from state
            // adds postId
            copy.post = postId
            copy.created_on = (new Date()).toISOString().split('T')[0],
                copy.author = parseInt(localStorage.getItem("token"))
            // adds current user id
            // sends to database using function from CommentManager
            addComment(copy)
                .then(() => setComment(""))
                .then(() => getComments(postId))
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

        <label htmlFor="content">Add New Comment:</label><br></br>
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