import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { userID, bandID, verificationStatus } = req.body;
  if (verificationStatus) {
    try {
      const response = await prisma.userData.update({
        where: {
          id: userID,
        },
        data: {
          bandDataId: bandID,
          role: "MEMBER",
        },
      });
      await prisma.bandData.update({
        where: {
          id: bandID,
        },
        data: {
          bandMembers: {
            connect: {
              id: userID,
            },
          },
        },
      });
      console.log("JOIN BAND RESPONSE: " + response);
      res.send(response);
    } catch (e) {
      console.log("ERROR: " + e);
      res.send(e);
    }
  }
}
