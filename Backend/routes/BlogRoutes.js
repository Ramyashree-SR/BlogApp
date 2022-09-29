const express = require("express");
const route = express.Router();

const blogControler = require("../Controllers/BlogTask");
route.post("/postblog", blogControler.addTask);
route.get("/getblog", blogControler.getTask);
route.put("/updateBlog/:_id", blogControler.modifyTask);
route.delete("/deleteBlog/:_id", blogControler.deleteTask);
module.exports = route;
