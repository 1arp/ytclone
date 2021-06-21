import * as Minio from "minio"

export const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: process.env.MINIO_KEY,
  secretKey: process.env.MINIO_SECRET
})
