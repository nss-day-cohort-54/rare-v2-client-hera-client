import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { editTag, getTagById } from "./TagManager"

export const EditTag = () => {
    const { tagId } = useParams()

    const [selectedTag, setSelectedTag] = useState(
        {
            label: ""
        }
    )

    const history = useHistory()

    useEffect(() => {
        getTagById(tagId)
            .then(data => { setSelectedTag(data)} )
    }, [tagId])

    const editCurrentTag = (evt) => {

        evt.preventDefault()

        const editTagObj = {
            id: selectedTag.id,
            label: selectedTag.label
        }

        editTag(editTagObj).then(() => history.push("/tags"))
    }

    const updateTagState = (evt) => {
        const copy = {...selectedTag}
        copy.label = evt.target.value
        setSelectedTag(copy)
    }

    return (
        <form className="tagForm">
            <h2>Edit Tag</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="label"> Tag Label </label>
                    <div className="label">
                    <input type="text" 
                    name="label" 
                    className="form-control"
                    value={selectedTag.label}
                    onChange={updateTagState} />
                    </div>
                </div>
            </fieldset>

            <button onClick={editCurrentTag}>Submit Edits</button>
        </form>
    )
}