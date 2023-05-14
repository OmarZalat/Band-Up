import { PrismaClient } from "@prisma/client";
import ImageKit from "imagekit";

const prisma = new PrismaClient();

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export default async function handler(req, res) {
  const { imageBase64, content, bandDataId, type } = req.body;
  console.log(imageBase64, content, bandDataId);
  const url = await imagekit.upload({
    file: imageBase64,
    fileName: content[0],
  });
  const response = await prisma.bandPosts.create({
    data: {
      content,
      image: url.url,
      type,
      BandData: {
        connect: {
          id: bandDataId,
        },
      },
    },
  });
  console.log(url);
  res.send(response);
}
