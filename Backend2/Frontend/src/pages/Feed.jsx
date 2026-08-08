import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router";


function Feed() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    console.log("Fetching posts from backend...")
    axios.get("http://localhost:3000/feed")
      .then((res) => {
        setPosts(res.data.posts)
        console.log(res.data.posts)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  const deletePost = async (id) => {
    await axios.delete(`http://localhost:3000/feed/${id}`)
    console.log("Post Deleted")

    setPosts((prevPost) =>
      prevPost.filter((post) => post._id !== id)
    )
  }

  return (
    <>
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} deletePost={deletePost}
            />
          ))}
        </div>
      ) : (
        <div>No posts available.</div>
      )}
      <button className="p-4 ml-3 rounded-lg bg-blue-700 py-3 text-white hover:bg-blue-800" onClick={() => navigate("/create")}>Create New Post</button>

    </>
  );


}

export default Feed;