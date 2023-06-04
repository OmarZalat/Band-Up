import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { bandID } = req.body;
  const response = await prisma.bandData.findFirst({
    where: {
      id: bandID,
    },
  });
  res.send(response);
}
