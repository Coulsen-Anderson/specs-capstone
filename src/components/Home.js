import {useState, useEffect} from 'react'
import axios from 'axios'
import PostItem from '../Elements/PostItem'

const Home = () => {
    const [posts, setPosts] = useState([])

    const getAllPosts = () => {
        console.log('hit getallposts')
        axios.get('/post')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }
    useEffect(getAllPosts,[])

    return (
        <div>
            {posts.map(post => {
                return <PostItem key={post.id}
                post={post} getAllPosts={getAllPosts}/>
            })}
        </div>
    )
}

export default Home