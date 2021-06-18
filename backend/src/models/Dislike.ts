import { model, Schema } from "mongoose";

interface Dislike {
  userId: any;
  videoId: any;
  commentId: any;  
}


const dislikeSchema = new Schema<Dislike>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  videoId: { type: Schema.Types.ObjectId },
  commentId: { type: Schema.Types.ObjectId },
})


export const DislikeModel = model<Dislike>('Dislike', dislikeSchema);