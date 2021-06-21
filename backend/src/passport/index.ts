import { gootgleStrategy } from "./googleOAuth"
const passport = require('passport')

passport.use(gootgleStrategy)

export default passport