const express = require("express");
const {
  Pins,
  CreatePin,
  CreateTask,
  CreatePost,
} = require("../controllers/AdminController");

const routes = express.Router();

routes.route("/pins").get(Pins);
routes.route("/pin/create").post(CreatePin);
routes.route("/task/create").post(CreateTask);
routes.route("/post/create").post(CreatePost);

module.exports = routes;
