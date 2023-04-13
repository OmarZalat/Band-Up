import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const {
    firstName,
    lastName,
    email,
    password,
    DOB,
    gender,
    country,
    subscribe,
  } = req.body.formData;

  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  const hashedPassword = bcrypt.hashSync(password, saltRounds);

  try {
    const response = await prisma.userData.create({
      data: {
        FName: firstName,
        LName: lastName,
        email,
        password: hashedPassword,
        DOB,
        gender,
        country,
        newsletterMember: subscribe,
        emailVerification: false,
      },
    });
    console.log(response);
    res.json(response);
  } catch (e) {
    console.log("ERROR: " + e);
  }
}
