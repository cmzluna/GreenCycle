import { Router } from "express";
import { usersModel } from '../models/users.model.js'
import { getAllUsers, updateUser, createUser, loginUser, deleteUser, getUser, logoutUser } from '../services/users.service.js';



const router = Router()


router.post('/register', createUser);


router.post('/login', loginUser);


router.get('/allUsers', getAllUsers);


router.get('/profile', getUser)


router.get('/logout', logoutUser)


router.put('/updateUser', updateUser);


router.delete('/deleteUser', deleteUser);


export default router


