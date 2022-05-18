// fetch all the tags

const API = 'http://localhost:8000'

export const getAllTags = () => {
  return fetch(`${API}/tags`, {
    headers:{
      "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
    .then((res) => res.json())
}


export const editTag = (tag) => {
  return fetch(`http://localhost:8000/tags/${tag.id}`, {
      method: "PUT",
      headers: {
          "Authorization": `Token ${localStorage.getItem("token")}`,
          "Content-Type": "application/json"
          
      },
      body: JSON.stringify(tag)
  })
}

export const getTagById = (tagId) => {
  return fetch(`http://localhost:8000/tags/${tagId}`, {
      headers: {
          "Authorization": `Token ${localStorage.getItem("token")}`
      }
  })
  .then(res => res.json())
}

export const deleteTag = (tag) => {
  return fetch(`http://localhost:8000/tags/${tag.id}`, {
      method: "DELETE",
      headers: {
          "Authorization": `Token ${localStorage.getItem("token")}`
      }
  })
  .then(getAllTags)
}

export const createTag = (tag) => {
  return fetch("http://localhost:8000/tags", {
      method: "POST",
      headers: {
          "Authorization": `Token ${localStorage.getItem("token")}`,
          "Content-Type": 'application/json'
      },
      body: JSON.stringify(tag)
  })
  .then(response => response.json())
}