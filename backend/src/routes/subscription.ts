import { Router } from "express";
import { SubscriptionModel } from "~/models/Subscription";

const route = Router()

route.post("/subscribe", async (req, res) => {

  const subscription = new SubscriptionModel(req.body);

  await subscription.save()
  res.send(subscription)

});

route.post("/unsubscribe", async (req, res) => {

  await SubscriptionModel.findOneAndDelete(req.body)
  
  res.json({status:"ok"})
});

route.get('/mysubscribers', async(req,res) => {
  const subscribers = await SubscriptionModel.find({
    // @ts-ignore
    subscriptionToId: req?.user?._id
  })
  return subscribers
})
export default route