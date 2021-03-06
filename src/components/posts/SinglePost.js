import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
// import { Post } from "./Post"
import { getSinglePost } from "./PostManager"
import { useHistory } from "react-router-dom"


export const SinglePost = () => {
    const [post, setPost] = useState({})
    const { postId } = useParams()
    const history = useHistory()

    useEffect(
        () => {
            if(postId) {
                getSinglePost(postId)
                    .then(setPost)
            }
        },
        [postId]
    )

    return <>
    {/* {
        post.title
        ? <Post listView={false} cardView={false} post={post} />
        : "loading"
    } */}
        <section key={`post--${post.id}`} className="post">
            <div className="post__title"> Title: {post.title}</div>
            <img className="post__image" src={post.image_url} alt="post_pic"/>
            <div className="post__title"> Content: {post.content}</div>
            <div className="post__publication_date"> Published on: {post.publication_date}</div>
            <div className="post__author"> Author: {post.user?.user.username}</div>
            <div className="post__category"> Category: {post.category?.label}</div>
            <div className="post__category"> Tags: {
                post.tag?.map(t => <li>{t.label}</li>)
            }</div>

            <button className="btn" onClick={() => history.push(`/posts/single/${postId}/comments`)}>View Comments</button>
        </section>

    </>
}