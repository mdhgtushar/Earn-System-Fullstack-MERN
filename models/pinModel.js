const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    pin: {
      type: String,
      unique: true,
      dropDups: true,
      required: true,
    },
    status: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const PinModel = mongoose.model("pin", Schema);

module.exports = PinModel;
