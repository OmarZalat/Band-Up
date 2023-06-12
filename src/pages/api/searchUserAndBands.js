import { PrismaClient } from "@prisma/client";
import ImageKit from "imagekit";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { query } = req.body;
  const userResults = await prisma.userData.findMany({
    where: {
      username: {
        contains: query,
      },
    },
  });
  const bandResults = await prisma.bandData.findMany({
    where: {
      name: {
        contains: query,
      },
    },
  });
  res.send([...userResults, ...bandResults]);
}
