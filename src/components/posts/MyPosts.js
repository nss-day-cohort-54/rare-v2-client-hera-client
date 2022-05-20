import { useState, useEffect } from "react"
// import { Post } from "./Post"
import { getUserPosts } from "./PostManager"

export const MyPosts = () => {
    const currentUser = localStorage.getItem("token")
    const [posts, setPosts] = useState([])

    useEffect(
        () => {
            getUserPosts(currentUser)
                .then(setPosts)
        },
        []
    )

    return <>
        <article className="posts">
            {
                posts.map(post => {
                    return <><section key={`post--${post.id}`} className="post">
                        <div>Title: <a href={`/posts/single/${post.id}`} className="post__title"> {post.title}</a></div>
                        <div className="post__author"> Published by: {post.user.user.username}</div>
                        <div className="post__category"> Category: {post.category.label}</div>
                    </section></> 
                })
            }
        </article>
        {/* {
            posts.map(post => {
                return <div key={`post-${post.id}`}>
                    <Post listView={true} cardView={true} post={post} />
                </div> 
            })
        } */}
    </>
}