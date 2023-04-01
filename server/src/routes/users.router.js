import { Router } from "express";
import { usersModel } from '../models/users.model.js'
import { getAllUsers, updateUser, deleteUser } from '../controllers/users.controllers.js';
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


// REGISTRO CON PASSPORT

router.post(
    '/register',
    passport.authenticate('register', {
        failureRedirect: '/views/failRegister',
        passReqToCallback: true
    }, (req, res) => {
        res.redirect('/views/profile')
    })
)


router.post('/login', (req, res) => {
    res.json({ message: "This is user login" })
})

router.get('/profile', (req, res) => {
    res.json({ message: "This is user profile" })
})

router.get('/allUsers', getAllUsers);

router.put('/updateUser', updateUser);

router.delete('/deleteUser', deleteUser);

export default router


