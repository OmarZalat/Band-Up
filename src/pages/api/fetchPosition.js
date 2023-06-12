const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const response = await prisma.position.findMany();
    res.json(response);
  } catch (e) {
    console.log(`ERROR: ` + e);
  }
}
