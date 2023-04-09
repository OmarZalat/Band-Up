import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { enteredEmail } = req.body;
    const response = await prisma.userData.findFirst({
      where: {
        email: enteredEmail,
      },
    });
    console.dir("LOG IN FETCH:" + response.email);
    res.send({
      response: true,
    });
  } catch (e) {
    res.send({
      response: false,
    });
  }
}
