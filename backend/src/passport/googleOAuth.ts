import { UserModel } from "~/models/User";

let GoogleStrategy = require('passport-google-oauth20').Strategy;


export const gootgleStrategy = new GoogleStrategy(
  {
    clientID: "1023727363460-vk2rgcn9gasc2rl2p6g7hjed8mtugpg7.apps.googleusercontent.com",
    clientSecret: "8uGnbCb-WX_HErvnuSKZ2flq",
    callbackURL: "/auth/google/redirect",
    scope: ["email", "profile"],
  }, async (accessToken, refreshToken, profile, done) => {
    const profileJson = profile._json

    const dbUser = await UserModel.findOne({
      email: profileJson.email
    })
    console.log(dbUser)
    if (dbUser) return done(null, dbUser)
    
    const newUser = new UserModel({
      name: profileJson.name,
      email: profileJson.email,
      avatar: profileJson.picture
    })

    await newUser.save()
    console.log("////////////")
    console.log(newUser)
    return done(null, newUser)
  }
)

export default gootgleStrategy