import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  try {
    const response = await prisma.interests.findMany()
    console.log('GET TAG RESPONSE: ' + response)
    res.send(response)
  } catch (e) {
    console.log('ERROR: ' + e)
  }
}
