import { Router } from "express";
import { usersModel } from '../models/users.model.js'

const router = Router()

router.post('/register', async (req, res) => {
    const { email, password } = req.body
    try {
        const userExists = await usersModel.find({ email })
        if (userExists.length !== 0) {
            res.redirect('/views/failRegister')
        } else {
            res.redirect('/views/login')
        }
    } catch (error) {
        console.log(error)

    }

})

router.post('/login', (req, res) => {
    res.json({ message: "This is user login" })
})

router.get('/profile', (req, res) => {
    res.json({ message: "This is user profile" })
})

export default router


