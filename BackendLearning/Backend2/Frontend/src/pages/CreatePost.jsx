import axios from "axios"
import { useNavigate } from "react-router"

function CreatePost() {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
      console.log(res)
      navigate("/feed")
    })
    .catch((error)=>{
      console.log(error)
    })
  }

    return (
      <>
<div className="min-h-screen flex flex-col items-center justify-center">
  <h1 className="text-4xl mb-6">Create Post</h1>

  <div className="w-full max-w-lg rounded-lg shadow-md p-6">
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="file" name="image" accept="image/*" className="w-full bg-gray-200 shadow-lg file:bg-blue-700 file:text-white p-3 file:mr-1 file:p-1 file:rounded file:hover:bg-blue-800"/>

      <textarea rows={5} name="caption" placeholder="Add caption" className="w-full border border-gray-700 p-2 rounded-lg"/>

      <button type="submit" className="w-full rounded-lg bg-blue-700 py-3 text-white hover:bg-blue-800">Post</button>
    </form>
  </div>
</div>
</>
    );
}

export default CreatePost;