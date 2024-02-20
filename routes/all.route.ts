import express from "express";
import HomePageController from "../controllers/home.controller";
import FilterNewsController from "../controllers/filter.controller";
import IndiaPageController from "../controllers/india.controller";
import BusinessPageController from "../controllers/business.controller";

const router = express.Router();

// HOME page api

router.post("/home-page", HomePageController);
router.get("/filter-news/:id", FilterNewsController);
router.post("/india-page", IndiaPageController);
router.post("/business-page", BusinessPageController);

export default router;
