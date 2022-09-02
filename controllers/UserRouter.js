const checkAuth = require("../middleware/checkAuth");
const createError = require("../middleware/createError");
const PostModel = require("../models/postModel");
const TaskModel = require("../models/taskModel");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const TaskCountModel = require("../models/task_countModel");
const jwt = require("jsonwebtoken");

const app = {};

app.Dashboard = async (req, res, next) => {
  if (checkAuth(req)) {
    try {
      const verify = jwt.verify(req.cookies.token, process.env.JWT)
      const profile = await UserModel.findById(verify.user_id);
      const referrals = await UserModel.countDocuments({
        refer_name: profile.username,
      });
      const self_ads_click = await TaskCountModel.countDocuments({
        user_id: req.cookies.user_id,
      });

      res.json({
        account_status: true,
        account_activation: 2022,
        todays_income: 0,
        todays_click: 0,
        current_balance: 0,
        self_income: 0,
        referral_income: 0,
        self_ads_click,
        referral_ads_click: 0,
        referrals,
        ammount_paid: 0,
        ammount_painding: 0,
      });
    } catch (err) {
      next(err);
    }
  } else {
    next(createError(401, "401 Unauthorized"));
  }
};
app.Posts = async (req, res, next) => {
  if (checkAuth(req)) {
    const posts = await PostModel.find();
    res.json(posts);
  } else {
    next(createError(401, "401 Unauthorized"));
  }
};
app.Tasks = async (req, res, next) => {
  if (checkAuth(req)) {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } else {
    next(createError(401, "401 Unauthorized"));
  }
};
app.Networks = async (req, res, next) => {
  if (checkAuth(req)) {
    const profile = await UserModel.findById(req.cookies.user_id);
    const network = await UserModel.find({ refer_name: profile.username });
    res.json(network);
  } else {
    next(createError(401, "401 Unauthorized"));
  }
};
app.Profile = async (req, res, next) => {
  try {
    if (checkAuth(req)) {
      const profile = await UserModel.findById(req.cookies.user_id);
      if (profile) {
        res.json(profile);
      } else {
        res.json({ success: false });
      }
    } else {
      next(createError(401, "401 Unauthorized"));
    }
  } catch (err) {
    next(err);
  }
};
app.Task_Count = async (req, res, next) => {
  if (checkAuth(req)) {
    try {
      const TaskSave = new TaskCountModel({
        user_id: req.cookies.user_id,
        task_id: req.body.task_id,
      });
      await TaskSave.save();
      res.send({
        success: true,
      });
    } catch (err) {
      next(err);
    }
  } else {
    next(createError(401, "401 Unauthorized"));
  }
};
app.Register = async (req, res, next) => {
  if (checkAuth(req)) {
    next(createError(404, "Already Looged In"));
  } else {
    const password = await bcrypt.hash(req.body.password, 10);
    try {
      const RegisterSave = new UserModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        username: req.body.username,
        refer_name: req.body.refer_name,
        password: password,
      });
      await RegisterSave.save();
      res.send({ success: true });
    } catch (err) {
      next(err);
    }
  }
};
app.Login = async (req, res, next) => {
  if (checkAuth(req)) {
    next(createError(404, "Already Looged In"));
  } else {
    try {
      const user = await UserModel.findOne({ username: req.body.username });

      if (user) {
        const compare = await bcrypt.compare(req.body.password, user.password);
        if (compare) {
          const data = jwt.sign({"user_id": user._id}, process.env.JWT)
          res.cookie("token", data);
          res.send(user);
        } else {
          res.send({ success: false, message: "password error" });
        }
      } else {
        res.send({ success: false });
      }
    } catch (err) {
      next(err);
    }
  }
};
app.checkAuth = (req, res, next)=>{
  try{
    const verify = jwt.verify(req.cookies.token, process.env.JWT);
    if(verify){
      res.json(true);
    }else{
      res.json(false);
    }
  }catch(err){
    next(false);
  }
}
module.exports = app;
