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
import HatkePageController from "../controllers/hatke.controller";
import InternationalPageController from "../controllers/international.controller";
import AutomobilePageController from "../controllers/automobile.controller";
import SciencePageController from "../controllers/science.controller";
import TravelPageController from "../controllers/travel.controller";
import MiscellaneousPageController from "../controllers/miscellaneous.controller";
import FashionPageController from "../controllers/fashion.controller";
import EducationPageController from "../controllers/education.controller";
import healthPageController from "../controllers/health.controller";
import DeleteController from "../controllers/delete.controller";

const router = express.Router();

// HOME page api

router.post("/delete-all", DeleteController);
router.post("/home-page", HomePageController);
router.get("/filter-news/:id", FilterNewsController);
router.post("/india-page", IndiaPageController);
router.post("/business-page", BusinessPageController);
router.post("/politics-page", PoliticsPageController);
router.post("/sports-page", SportsPageController);
router.post("/technology-page", TechnologyPageController);
router.post("/startups-page", StartUpsPageController);
router.post("/entertainment-page", EntertainmentPageController);
router.post("/hatke-page", HatkePageController);
router.post("/international-page", InternationalPageController);
router.post("/automobile-page", AutomobilePageController);
router.post("/science-page", SciencePageController);
router.post("/travel-page", TravelPageController);
router.post("/miscellaneous-page", MiscellaneousPageController);
router.post("/fashion-page", FashionPageController);
router.post("/education-page", EducationPageController);
router.post("/health-page", healthPageController);

export default router;
