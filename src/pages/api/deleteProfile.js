import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.body;
  const response = await prisma.userData.delete({
    where: {
      id: "clgfn9q0100047k80s6mo9bze",
    },
  });
  console.log(response);
  res.json(response);
}
