const app = require("./src/app")

const notes = []



// app.post('/notes', (req, res) => {
//     notes.push(req.body);

//     res.status(201).json({
//         message:"Note added SuccessFully"
//     })
// })

// app.get("/notes", (req, res)=>{

//     res.status(200).json({
//         message:"Notes Fetched Successfully",
//         notes:notes
//     })
// })

// app.delete("/notes/:index", (req, res)=>{
//     const index = req.params.index

//     delete notes[index]

//     res.status(200).json({
//         message:"Notes deleted successfully"
//     })
// })

// app.patch("/notes/:index", (req, res)=>{
//     const index = req.params.index
//     const description = req.body.description

//     notes[index].discription = description;

//     res.status(200).json({
//         message:"note updated successfully"
//     })
// })


app.listen(3000, ()=>{
    console.log("Server Started at 3000")
})