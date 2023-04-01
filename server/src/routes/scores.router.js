import { Router } from "express";
import { scoresModel} from '../models/scores.model.js'


const router = Router();


router.get("/puntos", (req, res)=>{ 
    return res.json({message:"hola"});
})

router.post("/puntos",(req, res) => recycles_manager.createRecycle(req.body)); 



export default router;