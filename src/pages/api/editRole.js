import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { userID, bandID, leader, newRole } = req.body;
  if (leader.bandDataId === bandID && leader.role === "LEADER") {
    try {
      if (newRole !== null) {
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
      } else {
        const response = await prisma.userData.update({
          where: {
            id: userID,
          },
          data: {
            bandDataId: null,
            role: null,
          },
        });
        const members = await prisma.bandData.findFirst({
          select: {
            bandMembers: true,
          },
          where: {
            id: bandID,
          },
        });
        const newMembers = members.bandMembers.filter(
          (member) => member.id !== userID
        );
        await prisma.bandData.update({
          where: {
            id: bandID,
          },
          data: {
            bandMembers: newMembers,
          },
        });
        console.log("KICK MEMBER RESPONSE: " + response);
        res.send(response);
      }
    } catch (e) {
      console.log("ERROR: " + e);
      res.send(e);
    }
  }
}
