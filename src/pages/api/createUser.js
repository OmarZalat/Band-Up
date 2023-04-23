import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
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
    const secretKey = process.env.SECRET_KEY;
    const expiresIn = 15000;

    // Generate JWT token
    const token = jwt.sign({ email }, secretKey, { expiresIn });

    // Create a transporter for sending emails
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "bandupsup@gmail.com", // Replace with your own email address
        pass: "eghtpkmfuqkkwatz", // Replace with your own email password
      },
    });

    // Compose the email
    const emailOptions = {
      from: "bandupsup@gmail.com", // Replace with your own email address
      to: email, // User's email address
      subject: "Email Verification",
      html: `Please click the following link to verify your email: <a href="https://your-app.com/verify?token=${token}">Verify Email</a>`,
    };

    // Send the email
    transporter.sendMail(emailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.json(response);
  } catch (e) {
    console.log("ERROR: " + e);
  }
}
