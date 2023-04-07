import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  console.log("AHGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG:" + req.body);

  const { firstName } = req.body.currentUser;

  console.log("AHGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG2:" + req.body);

  const response = await prisma.userData.create({
    data: {
      firstName,
      lastName,
      email,
      password,
      confirmedPassword,
      day,
      month,
      year,
      gender,
      country,
      subscribe,
    },
  });
  console.log(response);
  res.json(response);
  return response;
}
