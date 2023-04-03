import { scoresModel } from "../models/scores.model.js";

//5 POINTS FOR BOTTLE
export const getCurrentPoints = async (req, res) => {
  const { userId } = req.params;
                                                      //$natural= último valor guardado en mongoose
  const lastScore = await scoresModel.findOne({ userId }).sort({ $natural: -1 });

  if (!lastScore) {
    return res.status(404).json({ message: "404" });
  }

  const { currentPoints } = lastScore;

  return res.json({ currentPoints });
};

//EACH BOTTLE
export const getCurrentBottles = async (req, res) => {
  const { userId } = req.params;

  const lastScore = await scoresModel.findOne({ userId }).sort({ $natural: -1 });

  if (!lastScore) {
    return res.status(404).json({ message: "404" });
  }

  const { currentBottles } = lastScore;

  return res.json({ currentBottles });
};

//WEIGHT 9gr PER BOTTLE
export const getCurrentWeight = async (req, res) => {
  const { userId } = req.params;

  const lastScore = await scoresModel.findOne({ userId }).sort({ $natural: -1 });

  if (!lastScore) {
    return res.status(404).json({ message: "Score not found" });
  }

  const { currentWeight } = lastScore;

  return res.json({ currentWeight });
};



