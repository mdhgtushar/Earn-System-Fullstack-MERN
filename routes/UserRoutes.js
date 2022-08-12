const express = require("express");
const {
  Dashboard,
  Tasks,
  Posts,
  Networks,
  Register,
  Login,
  Profile,
} = require("../controllers/UserRouter");

const routes = express.Router();

routes.route("/register").post(Register);
routes.route("/login").post(Login);
routes.route("/dashboard").get(Dashboard);
routes.route("/posts").get(Posts);
routes.route("/tasks").get(Tasks);
routes.route("/networks").get(Networks);
routes.route("/profile").get(Profile);

module.exports = routes;
