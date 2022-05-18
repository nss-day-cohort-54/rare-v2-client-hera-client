import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchIt } from "../utils/Fetch"
import { Settings } from "../utils/Settings"
import { createTag, getAllTags } from "./TagManager";
// define a function that returns the create new tag form
export const NewTagForm = ({ getTags }) => {
    
    const history = useHistory()

    const [newTag, setNewTag] = useState({label: ""})

    const changeTagState = (evt) => {
        const copy = {...newTag}
        copy.label = evt.target.value
        setNewTag(copy)
    }

  
    return (
        <>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="tag">Create a new tag</label>
                    <input
                        required autoFocus
                        type="text" id="tag"
                        className="form-control"
                        placeholder="add text"
                        value={newTag.label}
                        onChange={changeTagState}
                    />
                    <div className="submitButtonCreateNewTagForm">
                    <button type="submit"
                    onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const tag = {
                        label: newTag.label
                    }

                    // Send POST request to your API
                    createTag(tag)
                        .then(() => history.push("/tags"))
                }}
                className="btn btn-primary">Create</button>

                    </div>
                </div>
            </fieldset>
        </>
    )

    // add a button, which when clicked will will invoke the submit new tag function from the top of this module
}