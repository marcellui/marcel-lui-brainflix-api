const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

app.use(cors());
app.use(express.static('public/images'))

const tempVideos  = fs.readFileSync("./data/videos.json");
const videos = JSON.parse(tempVideos);

app.get("/videos", (req,res) => {
    res.send(videos)
})

app.get("/videos/:id", (req,res)=> {
    const foundVideo = videos.find(video => video.id === req.params.id)
    res.json(foundVideo)
})


app.listen("8080", () =>  {
    console.log("this is listening to 8080")
})


