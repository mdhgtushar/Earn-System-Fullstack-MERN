const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    method: {
      type: String,
    },
    number: {
      type: String,
    },
    ammount: {
      type: Number,
    },
    note: {
      type: String,
    },
    status: {
      type: Number,
    },
  },
  { timestamps: true }
);

const PaymentModel = mongoose.model("payment", Schema);

module.exports = PaymentModel;
