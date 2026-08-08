const express = require("express")
const postModel = require("./models/post.model")
const multer = require("multer")
const uploadFile = require("./services/storage.service")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer)

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  })

  res.status(201).json({
    message:"Post Created SuccessFully",
    post
  })

})

app.get("/feed", async (req, res) => {
    const posts = await postModel.find();

    res.status(200).json({
        message:"Posts Fetched Successfully",
        posts
    })
})

app.delete("/feed/:id", async (req, res) => {
  console.log("Delete Route hits")
  const id = req.params.id;

  await postModel.deleteOne({
    _id: id
  })

  res.status(200).json({
    message:"Post Deleted SuccessFully"
  })
})



module.exports = app