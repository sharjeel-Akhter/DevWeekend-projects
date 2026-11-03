import { useEffect, useState } from "react"
import axios from "axios"

const Day08Effect = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

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

    if(loading){
       return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }
    return (
        <div>
            Users List
        { 
            users.map((user) => <li key={user.id}>{user.name}</li>)
        } 
        </div>
    )
}

export default Day08Effect
