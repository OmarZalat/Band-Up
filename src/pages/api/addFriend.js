import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { followerId, followeeId } = req.body;
  const response = await prisma.friendship.create({
    data: {
      follower: {
        connect: {
          id: followerId,
        },
      },
      following: {
        connect: {
          id: followeeId,
        },
      },
    },
  });
  res.send(response);
}
