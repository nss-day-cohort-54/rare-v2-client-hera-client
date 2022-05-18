import { getAllTags, deleteTag } from "./TagManager"
import React, { useEffect, useState } from "react";
import { NewTagForm } from "./CreateTagForm";
import { Link } from "react-router-dom";



export const AllTags = () => {

    const [tags, setTags] = useState([])

    const getTags = () => {
        return getAllTags()
                .then((tags => {
                    setTags(tags)
                }))
    }

    useEffect(() => {
        getTags()
    },
        [])
    return <>
        <div>AllTags Page</div>
        <div className="CreateNewTagFormContainer">
            <Link to={`/tags/new`}>
            <button>NEW TAG</button>
            </Link>
        </div>
        {tags.map((tag) => {
            return <div key={`tag--${tag.id}`}>{tag.label} 
            <Link to={`/editTag/${tag.id}`}>
            <button>edit</button> 
            </Link>
            
            <button  onClick={() => deleteTag(tag).then(getTags)}>delete</button>
            </div>
        })}


    </>
}