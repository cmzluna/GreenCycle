
import { usersModel } from '../models/users.model.js';
import passport from "passport";


export const createUser = async(req, res, next) => {
    const  {firstName, lastName, email, password}= req.body //destructuryng
    const user = new usersModel({
        firstName, lastName, email, password
    });
    usersModel.register(user, password, (err, user) =>{
        if (err) {
            console.log(err);
            return res.render('registro', { error: err.message });
          }
          passport.authenticate('local')(req, res, function () {
        });
    });
    return res.status(200).json('usuario creado con éxito');
}



export const getAllUsers = async (req, res) => {
    try {
        let users = await usersModel.find();
        res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};


export const loginUser = async (req, res) =>{
    res.json({ message: "This is user login" })
}

export const updateUser = async(req, res) => {
    try {
        let { id } = req.params;
        let updateUser = await usersModel.findOneAndUpdate({_id: id}, req.body)
    } catch (error) {
        
    }
};

export const deleteUser = async(req, res) => {
    try {
        let { id } = req.params;

        let userDelete = await usersModel.findOneAndDelete({ _id: id})
        if(userDelete){
            res.status(204).json({ message: "User delete successfully"});
        } else{
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
};

export const getUser = async(req, res) => {
    res.json({ message: "This is user profile" })
}