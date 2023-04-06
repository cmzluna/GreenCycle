import { Router } from "express";
// import { createSite } from "../services/recycleSites.service.js";

const router= Router()


router.get('/sites', (req,res)=>{
        res.render('mapLocations')
        // res.json({message:"Bienvenidos al maplocations"})
})

// router.post('/createSite', (req,res)=> createSite)



export default router