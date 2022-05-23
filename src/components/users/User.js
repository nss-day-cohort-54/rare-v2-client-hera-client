// imports
// get all posts by user
// get subs by user
// post sub relationship
// delete sub relationship

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "./User.css"
import { getSingleUser } from "./UserManager"
import { Link } from "react-router-dom"
import { SubForm } from "./SubForm"


export const User = ({ listView, user }) => {

    const [viewUser, setViewUser] = useState(user)
    const [postCount, setPostCount] = useState(0)
    const { userId } = useParams()

    useEffect(
        () => {
            if(!listView) {
                getSingleUser(userId)
                    .then(userData => setViewUser(userData))
            }
        }, [userId, listView]
    )
        console.log(viewUser)


    return <>
        {listView 
            ? <div className="singleUser">
                <div>
                    <Link to={`/users/${user.id}`}>
                    {user.username}
                    </Link>
                </div>
                <div>{user.firstName}</div>
                <div>{user.lastName}</div>
                <div>{user.email}</div>
            </div> 
            : viewUser
                ? <div>
                    <div>Picture: <img src={`${viewUser.profile_image_url}`} width={300} height={300} /></div>
                    <div>Name: {viewUser.user.first_name} {viewUser.user.last_name}</div>
                    <div>Username: {viewUser.user.username}</div>
                    <div>Email: {viewUser.user.email}</div>
                    <div>Creation Date: {viewUser.created_on}</div>
                    <div>Profile Type: Author</div>
                    <div>
                        <SubForm author={viewUser} />
                    </div>
                </div>
                : null
        }

    
    </>
}