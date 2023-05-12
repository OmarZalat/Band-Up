import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { password, id } = req.body;
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  const response = await prisma.userData.update({
    where: {
      id,
    },
    data: { password: hashedPassword },
  });
  res.send(response);
}
