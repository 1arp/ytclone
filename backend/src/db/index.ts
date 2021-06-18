import { connect } from "mongoose"

export const connectDB = async () => {
  try{
    await connect('mongodb://localhost:27017/cipher', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("DB connected")
  }catch(e){
    console.log(e)
  }
}
