import express, { Response, Request } from "express";
import HomePageController from "../controllers/home.controller";

const router = express.Router();

// HOME page api

router.get("/home-page", HomePageController);

export default router;
