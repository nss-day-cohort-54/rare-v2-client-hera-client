import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./home/Home.js"
import { AllPosts } from "./posts/AllPosts.js"
import { UserList } from "./users/UserList.js"
import { AllTags } from "./tags/AllTags.js"
import { AllCategories } from "./categories/AllCategories"
import { User } from "./users/User.js"
import { CreatePosts } from "./posts/CreatePosts.js"
import { MyPosts } from "./posts/MyPosts.js"
import { PostsByUser } from "./posts/PostsByUser.js"
import { SinglePost } from "./posts/SinglePost.js"
import { CommentList } from "./comments/CommentsList.js"
import { EditTag } from "./tags/editTag.js"
import { NewTagForm } from "./tags/CreateTagForm.js"
import { NewCategoryForm } from "./categories/CreateCategoryForm.js"
import { EditCategoryForm } from "./categories/EditCategoryForm.js"
import { UpdatePostForm } from "./posts/UpdatePost.js"
import { EditComment } from "./comments/EditComment.js"

export const ApplicationViews = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/posts/all">
        <AllPosts />
      </Route>
      <Route exact path="/users">
        <UserList />
      </Route>
      <Route exact path="/users/:userId(\d+)">
        <User listView={false} />
      </Route>

      <Route exact path="/tags">
        <AllTags />
      </Route>

      <Route exact path="/tags/new">
        <NewTagForm />
      </Route>

      <Route exact path="/editTag/:tagId(\d+)">
        <EditTag />
      </Route>
      <Route exact path="/newPost">
        <CreatePosts editing={false} />
      </Route>
      <Route exact path="/editPost/:postId(\d+)">
        <UpdatePostForm/>
      </Route>
      <Route exact path="/posts/single/:postId(\d+)">
        <SinglePost />
      </Route>
      <Route exact path="/posts/myPosts">
        <MyPosts />
      </Route>
      <Route exact path="/posts/user/:userId(\d+)">
        <PostsByUser />
      </Route>
      {/* 
      <Route exact path="/posts/create">
        <CreatePost />
      </Route> */}
      <Route exact path="/categories">
        <AllCategories />
      </Route>
      <Route exact path="/posts/single/:postId(\d+)/comments">
        <CommentList />
      </Route>
      <Route exact path="/comments/single/:postId(\d+)/:commentId(\d+)">
        <EditComment />
      </Route>

      <Route exact path="/add-category">
        <NewCategoryForm />
      </Route>
      <Route exact path="/edit-category/:categoryId(\d+)">
        <EditCategoryForm />
      </Route>
    </>
  )
}
