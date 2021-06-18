import { model, Schema } from "mongoose";

interface Subscription {
  userId: any;
  subscriptionToId: any
}


const subscriptionSchema = new Schema<Subscription>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  contentId: { type: Schema.Types.ObjectId },
  comment: { type: String, required: true }

})


export const SubscriptionModel = model<Subscription>('Subscription', subscriptionSchema);