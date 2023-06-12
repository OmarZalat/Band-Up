import { PrismaClient } from "@prisma/client";
import ImageKit from "imagekit";

const prisma = new PrismaClient();

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export default async function handler(req, res) {
  const { imageBase64, id } = req.body;
  console.log(imageBase64);

  const url = await imagekit.upload({
    file: imageBase64,
    fileName: "image",
  });

  const response = await prisma.bandData.update({
    where: {
      id,
    },
    data: {
      profile: url.url,
    },
  });
  res.send(response);
}
