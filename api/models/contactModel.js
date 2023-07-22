const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const ContactModel = mongoose.model("contact", Schema);

module.exports = ContactModel;
