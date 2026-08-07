import { useState } from "react";

function Feed() {
    const [posts, setPosts] = useState([
        {
        _id: 1,
        image:"https://imgs.search.brave.com/WKHk23SLApXsGoz9E8kYyuywrsuWR95a56AwlV4tVIw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODc4OTIx/NzA0MTctZjlhMTFh/NDAyZWY3P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE5YeDhZ/Mjl0Y0hWMFpYSjha/VzU4TUh4OE1IeDhm/REE9",
        caption: "This is a sample caption for the post.",
        },
    ])
    
return (
  <>
    {posts.length > 0 ? (
      posts.map((post) => (
        <div key={post._id} className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden my-4">
          <img src={post.image} alt="Post" className="w-full h-64 object-cover"/>

          <div className="p-4">
            <p className="text-gray-700">{post.caption}</p>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center text-gray-500 mt-4">
        No posts available.
      </div>
    )}
  </>
);
    

}

export default Feed;