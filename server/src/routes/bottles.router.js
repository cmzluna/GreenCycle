import { Router } from "express";
import { postBottle } from "../services/bottles.service.js";

const router = Router()

router.post('/createBottle', postBottle
)


export default router


