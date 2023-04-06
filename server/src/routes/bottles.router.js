import { Router } from "express";
import { postBottle } from "../services/bottle.service.js";

const router = Router()

router.post('/createBottle', postBottle
)


export default router


