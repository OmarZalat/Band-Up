import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmedPassword,
    DOB,
    gender,
    country,
    subscribe,
  } = req.body.formData;

  try {
    const response = await prisma.userData.create({
      data: {
        FName: firstName,
        LName: lastName,
        email,
        password,
        confirmPassowrd: confirmedPassword,
        DOB,
        gender,
        country,
        newsletterMember: subscribe,
      },
    });
    console.log(response);
    res.json(response);
  } catch (e) {
    console.log("ERROR: " + e);
  }
}
