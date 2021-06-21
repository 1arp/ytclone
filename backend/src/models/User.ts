import { model, Model, Schema } from "mongoose";

interface User{
  name: string;
  avatar?: string;
}


const userSchema = new Schema<User>({
  name: {type: String, required: true},
  avatar: String,
  email: String
})


export const UserModel = model<User>('User', userSchema);