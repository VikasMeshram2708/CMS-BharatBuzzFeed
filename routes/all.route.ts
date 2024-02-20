import express from "express";
import HomePageController from "../controllers/home.controller";
import FilterNewsController from "../controllers/filter.controller";
import IndiaPageController from "../controllers/india.controller";
import BusinessPageController from "../controllers/business.controller";
import PoliticsPageController from "../controllers/politics.controller";
import SportsPageController from "../controllers/sports.controller";
import TechnologyPageController from "../controllers/technology.controller";
import StartUpsPageController from "../controllers/startups.controller";
import EntertainmentPageController from "../controllers/entertainment.controller";

const router = express.Router();

// HOME page api

router.post("/home-page", HomePageController);
router.get("/filter-news/:id", FilterNewsController);
router.post("/india-page", IndiaPageController);
router.post("/business-page", BusinessPageController);
router.post("/politics-page", PoliticsPageController);
router.post("/sports-page", SportsPageController);
router.post("/technology-page", TechnologyPageController);
router.post("/startups-page", StartUpsPageController);
router.post("/entertainment-page", EntertainmentPageController);
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
