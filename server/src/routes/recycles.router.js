import { Router } from "express";
import { recyclesModel} from '../models/recycles.model.js'
import RecyclesManager from "../services/recyclesManager.js";

const router = Router();
const recycles_manager = new RecyclesManager();

router.get("/puntos", (req, res)=>{ 
    return res.json({message:"hola"});
})

router.post("/puntos",(req, res) => recycles_manager.createRecycle(req.body)); 



export default router;