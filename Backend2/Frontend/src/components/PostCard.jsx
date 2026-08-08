import axios from "axios"
function PostCard({post, deletePost}) {

    return (
        <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden my-4">
            <img src={post.image} alt="Post" className="w-full h-80 object-cover" />
            <div className="p-4">
                <p className="text-gray-700 h-8 ">{post.caption}</p>
            </div>
            <button onClick={() => deletePost(post._id)} className="bg-red-500 text-white px-4 py-2 m-4 rounded hover:bg-red-600">Delete Post</button>
        </div>
    );
}

export default PostCard;