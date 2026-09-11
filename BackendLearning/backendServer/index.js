const express = require("express")

const app = express()
app.use(express.json())

const users = [];

app.get("/api/users", (req, res) => {
    res.status(200).json({
        message:"Users Fetched Successfully",
        users: users
    })
})
app.get("/api/users/:id", (req, res) => {
    const id = req.params.id
    res.status(200).json({
        message:"Users Fetched Successfully",
        users: users[id -1 ]
    })
})

app.post("/api/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json({
        message:"User Created Successfully",
        user:user
    })
})

app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id
    const user = delete users[id-1]
    res.status(200).json({
        message:"User deleted Successfully",
        users: users
    })
})

app.patch("/api/users/:id", (req, res) => {
    const id = req.params.id
    const name = req.body.name
    const updatedUser = users[id-1].name = name
    res.status(200).json({
        message:"User updated Successfully",
        users: users[id-1]
    })
})


app.listen(3000, ()=>{
    console.log("server started!")
})