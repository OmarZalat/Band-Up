import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const response = await prisma.userData.findMany({
    select: {
      image: true,
    },
  });
  res.send(response);
}
