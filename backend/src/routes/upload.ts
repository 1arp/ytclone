import { Request, Response, Router } from "express";
import { v4 } from "uuid";
import { minioClient } from "~/services/minio";

const route = Router()

route.post("/presignedUrl", async (req: Request, res: Response) => {
  try {
    const url = await minioClient.presignedPutObject("cipher", v4() + ".mp4" );
    res.json({
      data: url
    })

  } catch (e) {
    console.log(e)
  }
})

export default route