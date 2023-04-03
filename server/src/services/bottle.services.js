import { bottlesModel } from "../models/bottles.model.js";
import { scoresModel } from "../models/scores.model.js";
import { levelsModel } from "../models/levels.model.js";

export const postBottle= async (req,res) =>{
    const {userId} = req.body; 
    const newBottle =  await bottlesModel.create({userId,
        pointsByBottle: 5, weightOfBottle: 9}); 

    const score = await scoresModel.findOne({userId});

    if(!score){
        const firstScore = await scoresModel.create({userId,
            currentPoints: 5, currentBottles: 1, currentWeight: 9})
            return res.json(firstScore);
    }
    score.currentPoints += 5;
    score.currentBottles += 1;
    score.currentWeight += 9;
    
    await score.save();
   
    return res.json(score);
}