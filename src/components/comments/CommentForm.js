// imports
// addComment from CommentManager
import { useState } from "react"
import { addComment } from "./CommentManager"

// export function that handles comment form entry
export const CommentForm = ({ postId, getComments }) => {
    // declare state variable for comment to add
    const [newComment, setComment] = useState("")
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
            copy.postId = postId.id
            copy.authorId = parseInt(localStorage.getItem("token"))
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
    </>
}