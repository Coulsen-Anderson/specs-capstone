import { useState, useContext } from "react";
import axios from "axios";
import "./PostItem.css";
import AuthContext from "../store/authContext";

const PostItem = ({ post, getAllPosts, Saved }) => {
  const authCtx = useContext(AuthContext);

  const [editing, setEditing] = useState(false);

  const [songTitle, setSongTitle] = useState(post.songTitle);
  const [album, setAlbum] = useState(post.album);
  const [artist, setArtist] = useState(post.artist);
  const [genre, setGenre] = useState(post.genre);
  const [comment, setComment] = useState(post.comment);

  const updatePost = (e) => {
    e.preventDefault();
    const body = { songTitle, album, artist, genre, comment, Postid: post.id };

    axios
      .put("/post", body)
      .then(res => {
        setEditing(false);
        getAllPosts();
      })
      .catch(err => console.log(err));
  };

  const saveToMyPosts = () => {
    axios
      .post("/mypost", { userId: authCtx.userId, postId: post.id })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  console.log(post);
  return (
    <div className="post-card">
      {!editing ? (
        <div>
          <h2>Post by {post.user.username}</h2>
          <p>Song Title: {post.songTitle}</p>
          <p>Album: {post.album}</p>
          <p>Artist: {post.artist}</p>
          <p>Genre: {post.genre}</p>
          <p>comment: {post.comment}</p>
          <button onClick={() => saveToMyPosts()}>Save Song</button>
        </div>
      ) : (
        <form onSubmit={(e) => updatePost(e)}>
          <input
            placeholder="Song Title"
            type="text"
            onChange={(e) => setSongTitle(e.target.value)}
            value={songTitle}
          />
          <input
            placeholder="Album"
            type="text"
            onChange={(e) => setAlbum(e.target.value)}
            value={album}
          />
          <input
            placeholder="Artist"
            type="text"
            onChange={(e) => setArtist(e.target.value)}
            value={artist}
          />
          <input
            placeholder="Genre"
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
          />
          <input
            placeholder="Why"
            type="text"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <button>Submit</button>
        </form>
      )}

      <button onClick={() => setEditing(!editing)}>
        {editing ? "Cancel Changes" : "Edit Loadout"}
      </button>
    </div>
  );
};

export default PostItem;
