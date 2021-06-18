import { Router } from "express";
import { CommentModel } from "~/models/Comment";

const route = Router()

route.post('/', async (req, res) => {
  const { userId, videoId, comment } = req.body
  const newComment = new CommentModel({
    user: userId,
    video: videoId,
    comment
  })
  await newComment.save()
  res.json(newComment)
})

route.get('/:videoId', async (req, res) => {
  const { videoId } = req.params
  const comments = await CommentModel.find({
    video: videoId
  }).populate('user')
  res.json({data: comments})
})

export default route