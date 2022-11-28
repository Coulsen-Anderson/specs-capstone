import { useState, useEffect, useContext } from "react";
import axios from 'axios'
import PostItem from "../Elements/PostItem";
import AuthContext from "../store/authContext";

function MyPosts () {
    const authCtx = useContext(AuthContext)
    const [myposts, setMyPosts] = useState([])

    const getAllPosts = () => {
        axios.get(`/mypost/${authCtx.userId}`)
            .then(res => {
                console.log(res.data)
                setMyPosts(res.data)
            })
    }
    
    useEffect(getAllPosts, [])

    return (
        <div>
            {myposts.map(post => {
                return <PostItem post={post.post} />
            })}
        </div>
    )
}

export default MyPosts