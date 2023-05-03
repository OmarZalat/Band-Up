import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { enteredEmail } = req.body;
    const response = await prisma.userData.findFirst({
      where: {
        email: enteredEmail,
      },
    });
    console.log(response);
    if (response) {
      const secretKey = process.env.SECRET_KEY;
      const expiresIn = 15000;

      // Generate JWT token
      const token = jwt.sign({ enteredEmail }, secretKey, { expiresIn });

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
        to: enteredEmail, // User's email address
        subject: "Email Verification",
        html: `Please click the following link to change your password: <a href="http://localhost:3000/verify/${response.id}">Verify Email</a>`,
      };

      // Send the email
      transporter.sendMail(emailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent:", info.response);
        }
      });

      res.send({
        response: "Email Sent",
      });
    } else {
      res.send({
        response: "Invalid EmailAddress",
      });
    }
  } catch (e) {
    console.log(e);
    res.send({
      response: "Invalid EmailAddress",
    });
  }
}
