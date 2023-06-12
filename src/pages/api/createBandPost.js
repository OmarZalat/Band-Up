import { PrismaClient } from "@prisma/client";
import ImageKit from "imagekit";

const prisma = new PrismaClient();

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export default async function handler(req, res) {
  const { imageBase64, content, bandDataId, type, userID } = req.body;
  console.log(imageBase64, content, bandDataId);
  let url = null;
  if (imageBase64) {
    url = await imagekit.upload({
      file: imageBase64,
      fileName: content[0] || "image",
    });
  }
  if (bandDataId) {
    const response = await prisma.bandPosts.create({
      data: {
        content,
        image: url?.url || undefined,
        type,
        UserData: {
          connect: { id: userID },
        },
        BandData: {
          connect: {
            id: bandDataId,
          },
        },
      },
    });
    res.send(response);
  } else {
    const response = await prisma.bandPosts.create({
      data: {
        content,
        image: url?.url || undefined,
        type,
        UserData: {
          connect: { id: userID },
        },
      },
    });
    res.send(response);
  }
  console.log(url);
}
