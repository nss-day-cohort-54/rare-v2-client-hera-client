import { fetchIt } from "../utils/Fetch"
import { Settings } from "../utils/Settings"

// getCommentsByPostId
export const getCommentsByPostId = (postId) => {
    return fetchIt(`${Settings.API}/comments?post=${postId}`)
}


// deleteComment
export const deleteComment = (commentId) => {
    return fetchIt(`${Settings.API}/comments/${commentId}`, "DELETE")
}

// addComment
export const addComment = (newComment) => {
    return fetchIt(`${Settings.API}/comments`, "POST", JSON.stringify(newComment))
}

export const getSingleComment = (commentId) => {
    return fetch(`http://localhost:8000/comments/${commentId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("token")}`
        }
    }
    )
    .then(response => response.json())
}

export const updateComment = (comment, commentId) => {
    const requestOptions = {
        method: 'PUT' ,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(comment) 
    }

    return fetch (`http://localhost:8000/comments/${commentId}`, requestOptions)
    // .then(response => response.json())
}