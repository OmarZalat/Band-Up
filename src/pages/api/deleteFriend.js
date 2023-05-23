import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { followerId, followeeId } = req.body;
  const response = await prisma.friendship.delete({
    where: {
      followerId_followingId: {
        followerId,
        followingId: followeeId,
      },
    },
  });
  res.send(response);
}
