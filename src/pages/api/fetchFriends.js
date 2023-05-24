import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { followerId } = req.body;
  const response = await prisma.friendship.findMany({
    select: {
      following: {
        select: { id: true, username: true, image: true },
      },
    },
    where: {
      followerId,
    },
  });
  res.send(response);
}
