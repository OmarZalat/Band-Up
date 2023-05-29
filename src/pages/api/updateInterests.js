import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { id, interestId } = req.body
  const response = await prisma.userData.update({
    where: {
      id
    },
    data: {
      interests: {
        connect: {
          id: interestId
        }
      }
    }
  })

  res.send(response)
}
