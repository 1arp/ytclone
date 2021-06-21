import { model, Model, Schema } from "mongoose";

interface Video {
  user: any;
  title: string;
  description?: string;
  url: string;
  category?: string;
}


const videoSchema = new Schema<Video>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  category: {
    type:  String,
    enum: ['CAT1' , 'CAT2', 'CAT3'],
    default: 'CAT1'
  }
})


export const VideoModel = model<Video>('video', videoSchema);