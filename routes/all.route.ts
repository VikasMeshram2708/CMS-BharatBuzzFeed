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
router.post("/politics-page", BusinessPageController);
router.post("/sports-page", BusinessPageController);
router.post("/technology-page", BusinessPageController);
router.post("/startups-page", BusinessPageController);
router.post("/entertainment-page", BusinessPageController);
router.post("/hatke-page", BusinessPageController);
router.post("/international-page", BusinessPageController);
router.post("/automobile-page", BusinessPageController);
router.post("/science-page", BusinessPageController);
router.post("/travel-page", BusinessPageController);
router.post("/miscellaneous-page", BusinessPageController);
router.post("/fashion-page", BusinessPageController);
router.post("/education-page", BusinessPageController);
router.post("/health-page", BusinessPageController);

export default router;
