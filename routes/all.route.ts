import express from "express";
import HomePageController from "../controllers/home.controller";
import FilterNewsController from "../controllers/filter.controller";
import IndiaPageController from "../controllers/india.controller";

const router = express.Router();

// HOME page api

router.post("/home-page", HomePageController);
router.get("/filter-news/:id", FilterNewsController);
router.post("/india-page", IndiaPageController);

export default router;
