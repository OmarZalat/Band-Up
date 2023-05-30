import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { bio, name, userID, role, tagID, verificationStatus } =
    req.body.formData;
  console.log(req.body);
  console.log(verificationStatus);
  if (verificationStatus) {
    try {
      const response = await prisma.bandData.create({
        data: {
          bio,
          name,
          interest: {
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
}
