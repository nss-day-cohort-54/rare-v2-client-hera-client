import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getCurrentCategory, putCategory } from "./CategoryManager";

// def a function that will return a new category form

export const EditCategoryForm = () => {

    const history = useHistory()
    const [category, setCategory] = useState({})
    const {categoryId} = useParams()

    useEffect(() => {
        getCurrentCategory(parseInt(categoryId)).then(categoryData => setCategory(categoryData))
    }, [])

    const editCategoryState = (event) => {
        const editedCategory = Object.assign({}, category)
        editedCategory[event.target.name] = event.target.value
        setCategory(editedCategory)
    }

    return (
        <>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Edit the Category</label><br></br>
                    <input
                        required autoFocus
                        type="text" id="category"
                        className="form-control"
                        name="label"
                        value={category.label}
                        onChange={editCategoryState}
                    />
                    <div className="submitButtonCreateNewCategoryForm">

                        <button type="submit" onClick={(event) => {
                            event.preventDefault()
                            
                            const updatedCategory = {
                                label: category.label
                            }
                            
                            putCategory(updatedCategory, parseInt(categoryId))
                                .then(() => history.push("/categories"))
                        }} className="submit-button">
                            Save
                        </button>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
