import express from "express";
import logger from "./middleware/logger.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(logger);
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", usersRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
