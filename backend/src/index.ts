require('module-alias/register')
require('source-map-support').install();

import app from "~/app";
import { connectDB } from "./db";
import { UserModel } from "./models/User";

(async() => {
  await connectDB();

  app .listen(8080 , () => {console.log("server started")})
})()