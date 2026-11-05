function notFound(req, res, next) {
  const error = new Error(`Not found: ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error);
}

export default notFound;
