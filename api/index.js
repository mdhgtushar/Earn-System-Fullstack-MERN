//external imports
const express = require("express");
const DBConnect = require("./config/db");
const UserRouter = require("./routes/UserRoutes");
const AdminRouter = require("./routes/AdminRoutes");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
//init
const app = express();
require("dotenv").config();
DBConnect();
//middleware
app.use(cors({
  origin: true,
   credentials: true
}));
app.use(express.json());
app.use(cookieParser());

//routes
app.get("/", (req, res) => res.send("App is running ..."));
app.use("/api/user", UserRouter);
app.use("/api/admin", AdminRouter);

//errorHandler
app.use(errorHandler);
//run app
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("apprunning on port " + PORT);
});
