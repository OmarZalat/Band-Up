import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const response = await prisma.userData.update({
    where: {
      id: req.body.id,
    },
    data: {
      emailVerification: true,
    },
  });
  res.send(response);
}
