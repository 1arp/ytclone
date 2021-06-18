import express from "express"
import routes from "~/routes"
import cors from "cors"
import { UserModel } from "./models/User"
export const app = express()

app.use(cors())
app.use(express.json())

app.use('/', routes)
app.get('/users', async(req, res) => {
  const users = await UserModel.find({})
  res.json({users})
})
app.get('/', (req,res) => {
  res.send("hello world")
})

export default app