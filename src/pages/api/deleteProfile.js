import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.body;
  const response = await prisma.userData.delete({
    where: {
      id,
    },
  });
  console.log(response);
  res.json(response);
}
