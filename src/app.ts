import express, { Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import morgan from "morgan";
// Route FILES
import home from "../routes/home.route";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello,World!",
  });
});
app.use("/api", home);

export default app;
