import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getAllCategories } from "../categories/CategoryManager"
import { getAllTags } from "../tags/TagManager"
import { getSinglePost, putPost } from "./PostManager"


export const UpdatePostForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [post, setPost] = useState({})
    const {postId} = useParams()

    useEffect(() => {
      getAllCategories()
          .then((categories) => {
              setCategories(categories)
          })
  },
      [])

  useEffect(() => {
      getAllTags()
          .then((tags) => {
              setTags(tags)
          })
  },
      [])

    useEffect(
        () => {
            getSinglePost(parseInt(postId)).then((postData) => {
                postData.category=postData.category.id
                setPost(postData)
            })
        },
        []
    )

    const handleControlledInputChange = (event) => {
      /*
          When changing a state object or array, always create a new one
          and change state instead of modifying current one
      */
      const editedPost = Object.assign({}, post)
      if (event.target.name === "tag") {
          if (!(event.target.name in editedPost)) {
              editedPost[event.target.name] = []
          }
          let val = parseInt(event.target.id)
          if (event.target.checked) {
              editedPost[event.target.name].push(tags.find(tag => tag.id === val))
          } else {
              editedPost[event.target.name] = editedPost[event.target.name].filter(tag => tag.id !== val)
          }
      } else {
          editedPost[event.target.name] = event.target.value
      }
      setPost(editedPost)
  }

  // const submitPost = (e) => {
  //     e.preventDefault()
  //     let tagsToAdd = []
  //     if(post.tag && post.tag.length > 0) {
  //         tagsToAdd = post.tag.map(t => t.id)
  //     }
  //     const editPost = {
  //         userId: parseInt(localStorage.getItem("token")),
  //         category: parseInt(post.categoryId),
  //         title: post.title,
  //         publication_date: (new Date()).toISOString().split('T')[0],
  //         image_url: post.image_url,
  //         content: post.content,
  //         approved: 1,
  //         tag: tagsToAdd
  //     }
  //     if(editPost.title && editPost.image_url && editPost.category && editPost.tag.length > 0) {
  //         if (editing) {
  //             editPost.id = parseInt(postId)
  //             return fetchIt(`${Settings.API}/posts/${postId}`, "PUT", JSON.stringify(editPost))
  //                 .then(() => history.push(`/posts/single/${postId}`))
  //         } else {
  //             return fetchIt(`${Settings.API}/posts`, "POST", JSON.stringify(editPost))
  //                 .then((sentPost) => history.push(`/posts/single/${sentPost.id}`))
  //         }
  //     } else {
  //         window.alert("Please finish filling out post form.")
  //     }
  // }
  return (
      <>
          <fieldset>
            <h2 className="gameForm__title">Edit Your Post</h2>
              <div className="form-group">
                <label htmlFor="title">Title: </label>
                  <input
                      required
                      type="text" id="post"
                      className="form-control"
                      placeholder="Title"
                      name="title"
                      value={post.title}
                      onChange={handleControlledInputChange}
                  />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
              <label htmlFor="img_url">Image URL: </label>
                  <input
                      required
                      type="text" id="post"
                      className="form-control"
                      placeholder="Image URL"
                      name="image_url"
                      value={post.image_url}
                      onChange={handleControlledInputChange}
                  />
              </div>
          </fieldset>
          <fieldset>
              <div className="form-group">
                <label htmlFor="content">Content: </label>
                  <input
                      required
                      type="text" id="post"
                      className="form-control"
                      placeholder="Article Content"
                      name="content"
                      value={post.content}
                      onChange={handleControlledInputChange}
                  />
              </div>
          </fieldset>

          <fieldset>
              <div className="form-group">
                <label htmlFor="category">Category: </label>
                  <select name="category"
                      onChange={handleControlledInputChange}
                      value={post.category}>
                      <option value="0" name="category">Category Select</option>
                      {categories.map(c => (
                              <option key={`categoryId--${c.id}`} value={c.id}>
                                  {c.label}
                              </option>
                          ))
                      }
                  </select>
              </div>
          </fieldset>
                      
          <label htmlFor="tags" name="tag">Tags: </label>
            {tags.map(tag => {
                // logic to determine whether box should be pre-checked
                let checked_status = false
                if ("tag" in post) {
                    if (post.tag.length > 0) {
                        let found_tag = post.tag.find(t => t.id === tag.id)
                        if (found_tag) {
                            checked_status = true
                        } else {
                            checked_status = false
                        }
                    } else {
                        checked_status = false
                    }
                }
                return <div key={`formTags-${tag.id}`} className="checkbox">
                    <input name="tag"
                        type="checkbox"
                        htmlFor="tag"
                        id={tag.id}
                        onChange={handleControlledInputChange}
                        checked={checked_status}
                    />
                    <label htmlFor={tag.id}>{tag.label}</label>
                </div>
              })
            }

          <div className="submitButtonCreateNewPostForm">
              <button onClick={(e) => {
                e.preventDefault()
                let tagsToAdd = []
                if(post.tag && post.tag.length > 0) {
                  tagsToAdd = post.tag.map(t => t.id)
                }
                const editPost = {
                  title: post.title,
                  publication_date: (new Date()).toISOString().split('T')[0],
                  image_url: post.image_url,
                  content: post.content,
                  approved: 1,
                  category: parseInt(post.category),
                  tag: tagsToAdd
                }
                putPost(postId, editPost)
                .then(() => history.push(`/posts/single/${postId}`))
              }}
              className="submit-button">
                  Submit
              </button>
              <button onClick={() => history.push("/posts/all")}>Cancel</button>
          </div>
      </>
  )
}