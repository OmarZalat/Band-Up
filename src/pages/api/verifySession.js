import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const userToken = req.cookies.userToken;
  if (userToken) {
    res.send(userToken);
  } else {
    res.send(false);
  }
}
