import passport from './passport'
import { Strategy as LocalStrategy } from 'passport-local'
import { usersModel } from '../models/users.model'
import { hashPassword } from '../utils'



// PASSPORT - LOCAL
passport.use(
    'register',
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
    },
        async (req, email, password, done) => {
            const user = await usersModel.find({ email })
            if (user.lenght !== 0) {
                return done(null, false)
            }
            const hashNewPassword = await hashPassword(password)
            const newUser = {...req.body, password: hashNewPassword}
            const newUserDB = await usersModel.create(newUser)
            done(null, newUserDB)
        }
    )
)




passport.serializeUser((usuario, done) => {
    done(null, usuario._id)
})

passport.deserializeUser(async (_id, done) => {
    const user = await usersModel.findById(_id)
    done(null, user)
})
