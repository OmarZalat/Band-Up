import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id, firstName, lastName, userName, country, bio } = req.body.formData;
  const response = await prisma.userData.update({
    where: {
      id,
    },
    data: {
      FName: firstName,
      LName: lastName,
      username: userName,
      country,
      bio,
    },
  });
  return response;
}
