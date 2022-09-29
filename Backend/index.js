const express = require("express");
const app = express();
const cors = require("cors")
require("dotenv").config()
let port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

require("./config/db");

const blogRoute = require("./routes/BlogRoutes");
app.use("/home", blogRoute);

app.use((err, req, res, next) => {
  res.status(500).json({
     error: true, 
     message: err.message 
    });
});

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`)
});

