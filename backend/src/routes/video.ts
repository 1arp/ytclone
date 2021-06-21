import { Router } from "express";
import { VideoModel } from "~/models/Video";

const route = Router()

route.post('/publish', (req, res) => {
  const { title, description, url, userId, category} = req.body
  const newVideo = new VideoModel({
    title,
    description,
    url,
    user: userId,
    category,
  })
  newVideo.save()
  res.json(newVideo)
})

route.get('/', async (req, res) => {
  const { category } = req.body
  const videos = await VideoModel.find({
    category,
  }).populate('user')
  res.json({ data: videos })
})

route.get('/:id', async (req, res) => {
  const { id } = req.params
  const video = await VideoModel.findById(id).populate('user')
  res.json({ data: video })
})
export default route