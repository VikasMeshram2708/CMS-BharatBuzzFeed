import express from "express";
import HomePageController from "../controllers/home.controller";
import FilterNewsController from "../controllers/filter.controller";

const router = express.Router();

// HOME page api

router.get("/home-page", HomePageController);
router.get("/filter-news/:id", FilterNewsController);

export default router;
