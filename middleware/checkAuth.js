const checkAuth = (req) => {
  if (req.cookies.user_id) {
    return true;
  } else {
    return false;
  }
};
module.exports = checkAuth;
