import { getAllCategories } from "./CategoryManager";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// declare and export function AllCategories which get all category objects

export const AllCategories = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory()

    // use UseEffect to getAllCategories and set the state of the category array.
    useEffect(() => {
        getCategories()
    },
    [])
    
    const getCategories = () => {
        getAllCategories()
            .then((categories) => {
                setCategories(categories)
            })
    }

// return a map through the categories array that will have edit and delete buttons  
    return <>
        <div>All Categories</div>
        {categories.map((category) => {
            return <div key={`category--${category.id}`}>{category.label}
                <button>Edit</button> <button>Delete</button>
            </div>
        })}
        <div className="CreateNewCategoryFormContainer">
            <button id="btn" onClick={() => history.push(`/add-category`)}>Create Category</button>
        </div>
    </>
}

