require("dotenv").config()
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const comments = require("./routes/comments")

const app = express()

app.use(cors())
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/v1/", comments)

mongoose.connect(process.env.MONGODB_URI).then(
    console.log("Database connected successfully")
).catch((error)=> {
    console.error(error)
})

app.listen(process.env.PORT, async ()=> {
    console.log("Server Listening on PORT " + process.env.PORT)
})