import { Request, Response, Router } from "express";
import { DislikeModel } from "~/models/Dislike";
import { LikeModel } from "~/models/Like";

const route = Router()

route.get("/likes", async (req: Request, res: Response) => {

  let variable = {}
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId }
  } else {
    variable = { commentId: req.body.commentId }
  }

  const likes = await LikeModel.find(variable)
  res.json(likes)

})

route.get("/dislikes", async (req, res) => {

  let variable = {}
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId }
  } else {
    variable = { commentId: req.body.commentId }
  }

  const dislikes = await DislikeModel.find(variable)
  res.json(dislikes)

})

route.post("/like", async (req, res) => {

  let variable = {}
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId, userId: req.body.userId }
  } else {
    variable = { commentId: req.body.commentId, userId: req.body.userId }
  }

  const like = new LikeModel(variable)
  await like.save()
  await DislikeModel.findOneAndDelete(variable)
  res.json(like)
})

route.post("/dislike", async (req, res) => {

  let variable = {}
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId, userId: req.body.userId }
  } else {
    variable = { commentId: req.body.commentId, userId: req.body.userId }
  }

  const dislike = new DislikeModel(variable)
  await dislike.save()
  await LikeModel.findOneAndDelete(variable)
  res.json(dislike)
})

route.post("/unlike", async (req, res) => {

  let variable = {}
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId, userId: req.body.userId }
  } else {
    variable = { commentId: req.body.commentId, userId: req.body.userId }
  }

  const unlike = await LikeModel.findOneAndDelete(variable)
  res.json({ status: "ok" })
})

route.post("/undislike", async (req, res) => {

  let variable = {}
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId, userId: req.body.userId }
  } else {
    variable = { commentId: req.body.commentId, userId: req.body.userId }
  }

  const undislike = await DislikeModel.findOneAndDelete(variable)
  res.json({ status: "ok" })
})




export default route
