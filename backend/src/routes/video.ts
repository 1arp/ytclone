import { Router } from "express";
import { VideoModel } from "~/models/Video";

const route = Router()

route.post('/publish', (req, res) => {
  const { title, description, url, userId } = req.body
  const newVideo = new VideoModel({
    title,
    description,
    url,
    user: userId
  })
  newVideo.save()
  res.json(newVideo)
})

route.get('/', async (req, res) => {
  const videos = await VideoModel.find().populate('user')
  res.json({ data: videos })
})

route.get('/:id', async (req, res) => {
  const { id } = req.params
  const video = await VideoModel.findById(id).populate('user')
  res.json({ data: video })
})
export default route