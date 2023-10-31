const express = require("express");
const router = express.Router();
const fs = require("fs");


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
    const newVideo ={
        id: uuidv4(),
        title,
        description,
        channel,
        image,
        views,
        likes,
        duration,
        video,
        timestamp,
        comments
    }
})
module.exports = router;