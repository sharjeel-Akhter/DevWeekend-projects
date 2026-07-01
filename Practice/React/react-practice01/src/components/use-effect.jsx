import { useEffect, useState } from "react";


function Update() {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    const [refetch, setRefetch] = useState(false)

    const handleUpdate = () => {
        setCount(prev => prev + 1);
    }

    const handleRefresh = () => {
        setRefetch(prev => !prev)
    }
    useEffect(() => {
        console.log("Use Effect in Action")

        const fetchUsers = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data);
            }catch(error){
                console.error(error)
            }
        }
        fetchUsers();
    },[refetch])
    return (
        <div>
            <h2>Use Effect Hook</h2>
            <p>Count:{count}</p>

            <ul>{users.map(user => <li key={user.name}>{user.name}</li>)}</ul>
            <button onClick={handleUpdate}>Increment</button> <br />
            <button onClick={handleRefresh}>Refresh</button>
        </div>
    );
}

export default Update;




