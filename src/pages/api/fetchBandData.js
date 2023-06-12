import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { bandID } = req.body;
  console.log(bandID);
  const response = await prisma.bandData.findFirst({
    select: {
      interest: true,
      bio: true,
      name: true,
      id: true,
      bandMembers: { include: { position: true } },
    },
    where: {
      id: bandID,
    },
  });
  console.log(response);
  res.send(response);
}
