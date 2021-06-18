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

export default route