import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { page } = req.body;
  const response = await prisma.bandPosts.findMany({
    take: page * 10,
    include: {
      UserData: true,
    },
    orderBy: { createdAt: "desc" },
  });
  res.json(response);
  console.log(response);
}
