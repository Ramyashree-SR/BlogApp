const blogSchema = require("../Models/BlogModel");
let addTask = async (req, res, next) => {
  let { name, date,content } = req.body;
  try {
    await blogSchema.insertMany({
      name,
     date,content
    });
    res.status(200).send({
      error: false,
      message: "Data added successfully",
    });
  } catch (err) {
    res.send(err);
  }
};
let getTask = async (req, res, next) => {
  try {
    let data = await blogSchema
      .find()
      .then((data) => {
        res.status(200).send({
          error: false,
          message: "data successfully getting",
          data,
        });
      })
      .catch(() => {
        res.status(500).send({
          error: true,
          message: "Data error",
        });
      });
  } catch (err) {
    res.send(err);
  }
};
let modifyTask = async (req, res, next) => {
  try {
    let _id = req.params._id;
    let {  name,date ,content } = req.body;
    await blogSchema.updateOne(
      { _id },
      {  name, date  }
    );
    res.status(200).send({
      error: "false",
      message: "Data updated successfully",
    });
  } catch (err) {
    res.send(err);
  }
};
let deleteTask = async (req, res, next) => {
  let _id = req.params._id;
  try {
    await blogSchema.deleteOne({ _id });
    res.status(200).send({
      error: false,
      message: "Blog Deleted successfully",
    });
  } catch (err) {
    // res.send(err)
    next(err);
  }
};
module.exports = { addTask, getTask, modifyTask, deleteTask };
