const jwt = require("jsonwebtoken");
const checkAuth = (req) => {
  if (req.cookies.token) {
    const verify = jwt.verify(req.cookies.token, process.env.JWT);
    if(verify){
      return true;
    }else {
      return false;
    }
  } else {
    return false;
  }
};
module.exports = checkAuth;
