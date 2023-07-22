const mongoose = require("mongoose");

const DBConnect = () => {
  mongoose.connect(process.env.MONGODB, () => {
    console.log("DB CONNECTED.");
  });
};

module.exports = DBConnect;
