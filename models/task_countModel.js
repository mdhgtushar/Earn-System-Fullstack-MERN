const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    task_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TaskCountModel = mongoose.model("task_count", Schema);

module.exports = TaskCountModel;
