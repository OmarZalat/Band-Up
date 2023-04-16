import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { bio, name, userID, role, tagID } = req.body;
  try {
    const response = await prisma.bandData.create({
      data: {
        bio,
        name,
        tag: {
          connect: {
            id: tagID,
          },
        },
        bandMembers: {
          connect: {
            id: userID,
          },
        },
      },
    });
    await prisma.userData.update({
      where: {
        id: userID,
      },
      data: {
        role,
      },
    });
    console.log("CREATE BAND RESPONSE: " + response);
    res.send(response);
  } catch (e) {
    console.log("ERROR: " + e);
    res.send(e);
  }
}
