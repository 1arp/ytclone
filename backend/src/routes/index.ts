import { Router } from "express";

import uploadRoute from "~/routes/upload"
import videoRoute from "~/routes/video"
import commentRoute from "~/routes/comment"
import ratingRoute from "~/routes/rating"
import subscriptionRoute from "~/routes/subscription"
import userRoute from "~/routes/user"
const route = Router()

route.use('/upload', uploadRoute)
route.use('/video', videoRoute)
route.use('/comment', commentRoute)
route.use('/rating', ratingRoute)
route.use('/subscription', subscriptionRoute)
route.use('/user', userRoute)

export default route