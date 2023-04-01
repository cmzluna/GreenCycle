
import { usersModel } from '../models/users.model.js';
import passport from "passport";


export const authenticateUser = async() => passport.authenticate('register', {
    failureRedirect: '/views/failRegister',
    passReqToCallback: true
}, (req, res) => {
    res.redirect('/views/profile')
})


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