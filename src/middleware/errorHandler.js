function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    next(err);
    return;
  }

  const invalidJson = err instanceof SyntaxError && err.status === 400 && "body" in err;
  const status = invalidJson ? 400 : err.status || 500;
  const message =
    status === 500 ? "Internal server error" : invalidJson ? "Request body must be valid JSON" : err.message;

  if (status === 500) {
    console.error(err);
  }

  res.status(status).json({ error: message });
}

export default errorHandler;
