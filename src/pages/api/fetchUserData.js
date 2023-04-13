import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { email, password } = req.body.formData;
    const response = await prisma.userData.findFirst({
      select: {
        id: true,
        FName: true,
        LName: true,
        email: true,
        DOB: true,
        gender: true,
        country: true,
        newsletterMember: true,
        emailVerification: true,
        password: true,
      },
      where: {
        email,
      },
    });
    const passwordMatch = bcrypt.compareSync(password, response.password);
    console.log(passwordMatch);

    if (passwordMatch) {
      res.json(response);
    } else {
      res.send(false);
    }
  } catch (e) {
    res.send(e);
  }
}
