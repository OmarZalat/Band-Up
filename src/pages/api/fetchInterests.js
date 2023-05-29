import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
   const response = await prisma.interests.findMany({})
   res.send(response)
}