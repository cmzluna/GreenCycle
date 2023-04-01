import { scoresModel } from "../models/scores.model.js";

export default class ScoresManager {
  /*async getAll() {
    try {
      const users = await usersModel.find().populate('courses').lean()
      return users
    } catch (error) {
      console.log(error)
    }
  }*/

  async createScore(object) {
    try {
        console.log(object);
      const newScore = await scoresModel.create(object)
      return newScore;
    } catch (error) {
      console.log(error)
    }
  }
/*
  async getOnebyId(idUser){
    try {
      const user = a
async getOnebyId(idUser){
    try {
      const user = await usersModel.findOne({_id:idUser}).populate('courses').lean()
      return user
    } catch (error) {
      console.log(error);
    }
  }

  async updateOne(idUser,objUser){
    try {
      const updateUser = await usersModel.updateOne({_id:idUser},{$set:objUser})
      return updateUser
    } catch (error) {
      console.log(error);
    }
  }*/
}

export const getScorebyAttribute= async (req,res) =>{
    
}

export const updateScorebyAttribute= async (req,res) =>{
    
}