// fetch all the categories

const API = 'http://localhost:8000'

export const getAllCategories = () => {
  return fetch(`${API}/categories`, {
    headers:{
        "Authorization": `Token ${localStorage.getItem("token")}`
    }
  })
    .then((res) => res.json())
}

export const createCategory = (category) => {
  return fetch(`${API}/categories`, { 
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(category)
  })
      .then(getAllCategories);
}
