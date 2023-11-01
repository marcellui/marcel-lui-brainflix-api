const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');


const tempVideos  = fs.readFileSync("./data/videos.json");
const videosData = JSON.parse(tempVideos);

router.get("/", (req,res) => {
    res.send(videosData)
})

router.get("/:id", (req,res)=> {
    const foundVideo = videosData.find(video => video.id === req.params.id)
    res.json(foundVideo)
})

router.post("/", (req,res)=> {
    const {title, description} = req.body;
    if (!title || !description){
        res.status(400).json("Title and Description is required")
    }
    const newVideo ={
        id: uuidv4(),
        title : title,
        description : description,
        image: "Upload-video-preview.jpg"
    }
    videosData.push(newVideo);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videosData));
    res.json(newVideo);
})
module.exports = router;