import { PrismaClient } from "@prisma/client";

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
      },
      where: {
        AND: [{ email }, { password }],
      },
    });
    res.json(response);
  } catch (e) {
    res.send(e);
  }
}
