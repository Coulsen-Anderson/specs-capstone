import {useContext, useState} from "react";
import AuthContext from "../store/authContext";
import axios from 'axios'
import './Create.css'

const AddPost = () => {
    const authCtx = useContext(AuthContext)

    const [songTitle, setSongTitle] = useState('')
    const [album, setAlbum] = useState('')
    const [artist, setArtist] = useState('')
    const [genre, setGenre] = useState('')
    const [albumCover, setAlbumCover] = useState('')
    const [comment, setComment] = useState('')
    

    const addPost = (e) => {
        e.preventDefault()
        const body = {songTitle, album, artist, genre, albumCover, comment}

        console.log(authCtx)

        axios.post(`/post/${authCtx.userId}`, body)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    return (
        <div className="createCard">
            <form onSubmit={e => addPost(e)}>
                <input placeholder="Song Title" type='text' onChange={e => setSongTitle(e.target.value)} className="input"/>
                <input placeholder="Album" type='text' onChange={e => setAlbum(e.target.value)} className="input"/>
                <input placeholder="Artist" type='text' onChange={e => setArtist(e.target.value)} className="input"/>
                <input placeholder="Genre" type='text' onChange={e => setGenre(e.target.value)} className="input"/>
                <input placeholder="Album Cover" type='text' onChange={e => setAlbumCover(e.target.value)} className="input"/>
                <input placeholder="Why" type='text' onChange={e => setComment(e.target.value)} className="input"/>
                <button className="button">Create Post</button>
            </form>
        </div>
    )
}

export default AddPost