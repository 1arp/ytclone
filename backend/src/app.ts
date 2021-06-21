import express from "express"
import routes from "~/routes"
import cors from "cors"
import { UserModel } from "./models/User"
import passport from "./passport"
const cookieSession = require('cookie-session');
export const app = express()

app.use(cors())
app.use(express.json())


app.use(cookieSession({
  name: 'sessionolapoladola',
  keys: ['key1', 'key2']
}))

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use(passport.initialize())
app.use(passport.session())

app.get('/googlelogin', passport.authenticate('google'))
app.get('/auth/google/redirect', passport.authenticate('google', {
  successRedirect: "http://localhost:3000/"
}));
app.use('/', routes)

app.get('/users', async (req, res) => {
  const users = await UserModel.find({})
  res.json({ users })
})
app.get('/', (req, res) => {
  res.send("hello world")
})

export default app