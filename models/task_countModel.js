const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    task_id: {
      type: String,
    },
  },
  { timestamps: true }
);

const TaskCountModel = mongoose.model("task_count", Schema);

module.exports = TaskCountModel;
