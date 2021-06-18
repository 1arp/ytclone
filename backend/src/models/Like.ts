import { model, Schema } from "mongoose";

interface Like {
  userId: any;
  videoId: any;
  commentId: any;  
}


const likeSchema = new Schema<Like>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  videoId: { type: Schema.Types.ObjectId },
  commentId: { type: Schema.Types.ObjectId },
})


export const LikeModel = model<Like>('Like', likeSchema);