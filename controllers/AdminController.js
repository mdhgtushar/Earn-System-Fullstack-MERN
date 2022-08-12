const PinModel = require("../models/pinModel");
const PostModel = require("../models/postModel");
const TaskModel = require("../models/taskModel");

const app = {};

app.Pins = async (req, res) => {
  const pins = await PinModel.find();
  res.json(pins);
};
app.CreatePin = async (req, res, next) => {
  try {
    const PinSave = new PinModel({
      pin: req.body.pin,
    });
    await PinSave.save();
    res.json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};
app.CreateTask = async (req, res) => {
  const TaskSave = new TaskModel({
    title: req.body.title,
    price: req.body.price,
    link: req.body.link,
    image: req.body.image,
  });
  await TaskSave.save();
  res.json({
    success: true,
  });
};
app.CreatePost = async (req, res) => {
  const PostSave = new PostModel({
    title: req.body.title,
    body: req.body.body,
    image: req.body.image,
  });
  await PostSave.save();
  res.json({
    success: true,
  });
};
module.exports = app;
