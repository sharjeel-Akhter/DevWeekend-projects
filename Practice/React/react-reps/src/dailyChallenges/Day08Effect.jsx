import { useEffect, useState } from "react"
import axios from "axios"
import useDebounce from "../Hooks/useDebounce";
import useLocalStorage from "../Hooks/useLocalStorage";

const Day08Effect = () => {
    const [users, setUsers] = useLocalStorage("users", []);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [searchKey, setSearchKey] = useState("")

    const debounced = useDebounce(searchKey, 500)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await axios.get("https://jsonplaceholder.typicode.com/users")
                setUsers(result.data)
            } catch (err) {
                console.log(err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    // const  filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchKey.trim().toLowerCase()));

    //Debounced Search Day 10
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(debounced.trim().toLowerCase()));
    console.log(debounced)

    if (loading && users.length === 0) {
        return <div>Loading...</div>
    }
    if (error && users.length === 0) {
        return <div>{error}</div>
    }
    return (
        <div>
            Users List <br />
            <input type="text" value={searchKey} placeholder="Search User" onChange={(e) => setSearchKey(e.target.value)} />
            <br />
            {filteredUsers.length === 0 && <p>No users found</p>}

            <ol>
                { filteredUsers.map((user) => <li key={user.id}>{user.name}</li>) }
            </ol>
        </div>
    )
}

export default Day08Effect
