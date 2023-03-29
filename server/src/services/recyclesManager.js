import { recyclesModel } from "../models/recycles.model.js";

export default class RecyclesManager {
  /*async getAll() {
    try {
      const users = await usersModel.find().populate('courses').lean()
      return users
    } catch (error) {
      console.log(error)
    }
  }*/

  async createRecycle(object) {
    try {
        console.log(object);
      const newRecycle = await recyclesModel.create(object)
      return newRecycle;
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