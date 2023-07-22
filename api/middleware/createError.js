const createError = (status, message) => {
  let err = new Error();
  err.status = status || 404;
  err.message = message || "something Error";
  return err;
};
module.exports = createError;
