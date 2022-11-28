import { useState, useContext } from "react";
import axios from "axios";
import "./PostItem.css";
import AuthContext from "../store/authContext";

const PostItem = ({ post, getAllPosts, myPosts }) => {
  const authCtx = useContext(AuthContext);

  const [editing, setEditing] = useState(false);

  const [songTitle, setSongTitle] = useState(post.songTitle);
  const [album, setAlbum] = useState(post.album);
  const [artist, setArtist] = useState(post.artist);
  const [genre, setGenre] = useState(post.genre);
  const [comment, setComment] = useState(post.comment);
  const [albumCover, setAlbumCover] = useState(post.albumCover);

  const updatePost = (e) => {
    e.preventDefault();
    const body = { songTitle, album, artist, genre, comment, albumCover, Postid: post.id };

    axios
      .put("/post", body)
      .then((res) => {
        setEditing(false);
        getAllPosts();
      })
      .catch((err) => console.log(err));
  };

  const saveToMyPosts = () => {
    axios
      .post("/mypost", { userId: authCtx.userId, postId: post.id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  console.log(post);
  return (
  <section className="container">
    <div className="post-card">
      {!editing ? (
        <div>
          <div className="pic">
            <img src={post.albumCover} className="albumCover"/>
          </div>
          {/* <p className="postElements">Song:</p> */}
          <p className="songTitle">{post.songTitle}</p>
          {/* <p className="postElements">Artist:</p> */}
          <p className="artist">{post.artist}</p>
          <p className="postElements">Album:</p>
          <p className="postInputs">{post.album}</p>
          <p className="postElements">Genre:</p>
          <p className="postInputs">{post.genre}</p>
          <p className="postInputs">{post.comment}</p>
          <h4 className="postElements">Post made by {post.user.username}</h4>
          {myPosts ? (
            <button>Remove</button>
          ) : (
            <button onClick={() => saveToMyPosts()} className="button">Save Song</button>
          )}
        </div>
        
      
      ) : (
        <form onSubmit={(e) => updatePost(e)}>
          <input
            placeholder="Song Title"
            type="text"
            onChange={(e) => setSongTitle(e.target.value)}
            value={songTitle}
            className="input"
          />
          <input
            placeholder="Album"
            type="text"
            onChange={(e) => setAlbum(e.target.value)}
            value={album}
            className="input"
          />
          <input
            placeholder="Artist"
            type="text"
            onChange={(e) => setArtist(e.target.value)}
            value={artist}
            className="input"
          />
          <input
            placeholder="Genre"
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
            className="input"
          />
          <input
            placeholder="Album Cover"
            type="text"
            onChange={(e) => setAlbumCover(e.target.value)}
            value={albumCover}
            className="input"
          />
          <input
            placeholder="Why"
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            className="input"
          />
          <button className="button">Submit</button>
        </form>
      )}

      {!myPosts ? (
        <button onClick={() => setEditing(!editing)} className="button">
          {editing ? "Cancel Changes" : "Edit Post"}
        </button>
      ) : null}
    </div>
  </section>  
  );
};

export default PostItem;
