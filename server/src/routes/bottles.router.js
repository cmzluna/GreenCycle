import { Router } from "express";
import ScoresManager from "../services/scores.service.js";
import { postBottle } from "../services/bottle.services.js";

const router = Router()

router.post('/createBottle', postBottle
)


export default router


