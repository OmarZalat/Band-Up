import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id, FName, LName, username, country, bio } = req.body.modalFormData;
  const response = await prisma.userData.update({
    where: {
      id,
    },
    data: {
      FName,
      LName,
      username,
      country,
      bio,
    },
  });
  console.log(response);
  res.json(response);
}
