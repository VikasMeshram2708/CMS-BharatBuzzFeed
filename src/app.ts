import express, { Response, Request } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

import morgan from "morgan";
// Route FILES
import allRotues from "../routes/all.route";

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
app.use("/api", allRotues);

export default app;
