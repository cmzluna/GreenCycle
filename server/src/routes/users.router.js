import { Router } from "express";
import { usersModel } from '../models/users.model.js'
import { getAllUsers, updateUser, createUser, loginUser, deleteUser, getUser} from '../services/users.services.js';
import passport from "passport";


const router = Router()

// router.post('/register', async (req, res) => {
//     const { email, password } = req.body
//     try {
//         const userExists = await usersModel.find({ email })
//         if (userExists.length !== 0) {
//             res.redirect('/views/failRegister')
//         } else {
//             res.redirect('/views/login')
//         }
//     } catch (error) {
//         console.log(error)
//     }
// })




router.post(
    '/registerUser',createUser
);

router.get('/allUsers', getAllUsers);

router.post(
    '/login', loginUser);

    router.put('/updateUser', updateUser);


router.get('/profile', getUser)

router.delete('/deleteUser', deleteUser);



export default router


