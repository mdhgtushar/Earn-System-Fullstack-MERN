const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: String,
    password: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: String,
    username: { type: String, required: true },
    refer_name: String,
  },
  { timestamps: true }
);

const UserModel = mongoose.model("user", Schema);

module.exports = UserModel;
