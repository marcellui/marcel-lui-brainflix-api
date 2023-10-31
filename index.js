const express = require("express");
const app = express();

const cors = require("cors");
const videos = require("./routes/videos");

app.use(cors());
app.use(express.static('public/images'))

app.use("/videos" , videos)

app.listen("8080", () =>  {
    console.log("this is listening to 8080")
})


