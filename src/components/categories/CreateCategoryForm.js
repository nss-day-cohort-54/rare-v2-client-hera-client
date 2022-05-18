import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createCategory } from "./CategoryManager";

// def a function that will return a new category form

export const NewCategoryForm = () => {

    const history = useHistory()
    const [category, setCategory] = useState({label: ""})

    const changeCategoryState = (event) => {
        const newCategory = Object.assign({}, category)
        newCategory[event.target.name] = event.target.value
        setCategory(newCategory)
    }

            return (
                <>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="category">Create a New Category</label><br></br>
                            <input
                                required autoFocus
                                type="text" id="category"
                                className="form-control"
                                name="label"
                                value={category.label}
                                onChange={changeCategoryState}
                            />
                            <div className="submitButtonCreateNewCategoryForm">
        
                                <button type="submit" onClick={(event) => {
                                    event.preventDefault()
                                    
                                    const createdCategory = {
                                        label: category.label
                                    }
                                    
                                    createCategory(createdCategory)
                                        .then(() => history.push("/categories"))
                                }} className="submit-button">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </>
            )
}
