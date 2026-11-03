import { useEffect, useState } from "react"
import axios from "axios"

const Day08Effect = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [searchKey, setSearchKey] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(result.data) 
            } catch (err) {
                console.log(err)
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    const  filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchKey.trim().toLowerCase()));

    if(loading){
       return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        <div>
            Users List <br />
            <input type="text" value={searchKey} placeholder="Search User" onChange={(e) => setSearchKey(e.target.value)}/>
            <br />
            {filteredUsers.length === 0 && <p>No users found</p>}
        {
            filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)
        } 
        </div>
    )
}

export default Day08Effect
