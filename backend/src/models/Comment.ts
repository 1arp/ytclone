import { model, Schema } from "mongoose";

interface Comment {
  userId: any;
  video: any;
  comment: string;
}


const commentSchema = new Schema<Comment>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  video: { type: Schema.Types.ObjectId, ref: 'Video' },
  comment: { type: String, required: true }

})


export const CommentModel = model<Comment>('Comment', commentSchema);