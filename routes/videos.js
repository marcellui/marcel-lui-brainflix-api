const express = require("express");
const router = express.Router();

router.get("/videos", (req,res) => {
    res.send(videos)
})

router.get("/videos/:id", (req,res)=> {
    const foundVideo = videos.find(video => video.id === req.params.id)
    res.json(foundVideo)
})

module.exports = router;