import { fetchIt } from "../utils/Fetch";
import { Settings } from "../utils/Settings"


export const getAllPosts = () => {
  return fetch(`${Settings.API}/posts`,
  {
    headers:{
        "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
    .then((res) => res.json())
}

// export function that fetches single post, needs param to take id as arg, then parse from json to js

export const getSinglePost = (id) => {
  return fetch(`${Settings.API}/posts/${id}`, 
  {
    headers:{
        "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
    .then((res) => res.json())
};
// export function that adds post

// for each post, return the fetch entries,

// method is POST
// headers

// body will have stringified json with (post) as arg
// then getAllPosts

export const putPost = (postId, editPost) => {
  return fetchIt(`${Settings.API}/posts/${postId}`, "PUT", JSON.stringify(editPost))
}

// export function that deletes a single post "postId => {"
// return a fetch with /${postId},
// method: DELETE
export const deletePost = (id) => {
  return fetchIt(`${Settings.API}/posts/${id}`, "DELETE",
  {
    headers:{
        "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
}

// export a function that edits a post "post => {"
// return fetch with /{post.id}
// method: PUT
// normal headers
// body is stringified json with entry passed as arg

// get posts by user id
export const getUserPosts = (id) => {
  return fetchIt(`${Settings.API}/posts/my_posts`)
};

export const getPostsByTag = (id) => {
  return fetchIt(`${Settings.API}/posts?tag_id=${id}`)
};
// get posts by categoryId
// export const getPostsByCategoryId = (categoryId) => {
//   return fetch(`http://localhost:8088/posts?categoryId=${categoryId}`)
//   .then(response => response.json())
// }

// create post
// export const createPost = (body) => {
//   return fetch(`http://localhost:8088/posts`, {

//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(body),
//   }).then((response) => response.json());
// };

export const searchPostTitles = titleString => {
  return fetch(`http://localhost:8088/posts?title=${titleString}`)
    .then(res => res.json())
};

export const searchPostCategories = categoryId => {
  return fetch(`http://localhost:8088/posts?category=${categoryId}`)
    .then(res => res.json())
};