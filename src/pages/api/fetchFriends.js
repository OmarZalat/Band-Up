import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { followerId } = req.body
  if (followerId) {
    const response = await prisma.friendship.findMany({
      select: {
        following: {
          select: { id: true, username: true, image: true }
        }
      },
      where: {
        followerId
      }
    })
    console.log(response)
    res.send(response)
  }
}
