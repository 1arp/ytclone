import { Router } from "express";
import { isAuthenticated } from "~/middlewares/auth";

const route = Router()

route.get('/me', isAuthenticated, (req, res) => {
  res.json(req.user)
})

export default route