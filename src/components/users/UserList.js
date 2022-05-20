// imports
// import { User } from "./User"
// get all users fetch
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { User } from "./User"
import { getAllUsers } from "./UserManager"

// function that generates list of users
// invokes User function from User.js for each user
export const UserList = () => {
    // define needed state variables
    // users, setUsers = useState()
    const [users, setUsers] = useState([])

    // define needed useEffects
    // useEffect(() => getUsers function and set as users state variable, [])
    useEffect(() => {
        getAllUsers().then(userData => {setUsers(userData)})
    }, [])
    // define needed functions
    // will the users have any buttons?
    // user links to individual pages probably don't need buttons/history.push()
    // can just be <Link> tags

    // return jsx
    return <>
    
    {
        users.map(user => {
            return <div key={`user-${user.id}`}>
                <User user={user} listView={true} />
                <Link to={`/users/${user.id}`} className="userDetails">
                <button className="userDetails">View Profile</button>
                </Link>
                <div className="singleUser">
                    <div>{user.user.username}</div>
                    <div>{user.user.first_name}</div>
                    <div>{user.user.last_name}</div>
                    <div>{user.user.email}</div>
                </div>
            </div>
            
        })
    }
    {/* 
        map over users and invoke <User /> component for each
        add any other jsx tags as needed for styling
    */}

    </>
}