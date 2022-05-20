// imports
// deleteComment from CommentManager.js

import { ButtonControls } from "../buttonControls/ButtonControls"
import { HumanDate } from "../utils/HumanDate"
import { Settings } from "../utils/Settings"
import { deleteComment } from "./CommentManager"


// export single comment component
export const Comment = ({ post, commentObject, currentAuthor, getComments }) => {
    // currentAuthor should be boolean defined where Comment component is invoked
    // true if the current user is the comment's author
    // in JSX, delete comment button is then displayed

    // function for deleteComment
    // takes parameter of comment's id
    // calls deleteComment from CommentManager
    // refresh list
    const removeComment = (commentId) => {
        deleteComment(commentId)
            .then(() => getComments(postId))
    }

    return <div className="comment" >
        {/* 
                JSX for comment
                should have 
                    content
                    author
                deleteComment displayed if comment author is current user
            */}
        <div>{commentObject.content}</div>
        <div>Written by: {commentObject.author.user.username}</div>
        <div>{HumanDate(commentObject.created_on)}</div>
        {
            currentAuthor
                ? <div>
                    <ButtonControls
                        isPost={false}
                        postId={post.id}
                        commentId={commentObject.id}
                        getComments={getComments} 
                        />
                </div>
                : null
        }
    </div>
}