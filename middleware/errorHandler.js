const errorHandler = (err, req, res, next) => {
  res.json({
    success: false,
    status: err.status || 500,
    message: err.message || "something Error",
  });
};

module.exports = errorHandler;
