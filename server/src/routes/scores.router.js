import express from "express";
import {getCurrentPoints, getCurrentBottles, getCurrentWeight} from '../services/scores.service.js';




const router = express.Router();



router.get("/:userId/currentPoints", getCurrentPoints);
router.get("/:userId/currentBottles", getCurrentBottles);
router.get("/:userId/currentWeight", getCurrentWeight);


export default router;