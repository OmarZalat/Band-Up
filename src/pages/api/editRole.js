import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { userID, bandID, leader, newRole } = req.body;
  if (leader.bandDataId === bandID && leader.role === "LEADER") {
    try {
      const response = await prisma.userData.update({
        where: {
          id: userID,
        },
        data: {
          bandDataId: bandID,
          role: newRole,
        },
      });
      console.log("EDIT ROLE RESPONSE: " + response);
      res.send(response);
    } catch (e) {
      console.log("ERROR: " + e);
      res.send(e);
    }
  }
}
