import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  try {
    const userToken = req.cookies.userToken

    if (userToken) {
      const response = await prisma.session.findFirst({
        select: {
          user: {
            select: {
              id: true,
              FName: true,
              LName: true,
              email: true,
              DOB: true,
              gender: true,
              country: true,
              newsletterMember: true,
              emailVerification: true,
              password: true,
              username: true,
              bio: true,
              bandDataId: true,
              role: true,
              interests: true
            }
          }
        },
        where: {
          sessionToken: userToken
        }
      })
      res.send(response)
    } else if (req.body?.formData.email && req.body?.formData.password) {
      const { email, password } = req.body.formData
      console.log(password)
      const saltRounds = 10
      const hashedPassword = bcrypt.hashSync(password, saltRounds)
      console.log(hashedPassword)

      const response = await prisma.userData.findFirst({
        select: {
          id: true,
          FName: true,
          LName: true,
          email: true,
          DOB: true,
          gender: true,
          country: true,
          newsletterMember: true,
          emailVerification: true,
          password: true,
          username: true,
          bio: true,
          bandDataId: true,
          role: true
        },
        where: {
          email
        }
      })
      const passwordMatch = bcrypt.compareSync(password, response.password)
      console.log(passwordMatch)

      if (passwordMatch) {
        //Generate User Token
        const sessionToken = jwt.sign(response, process.env.SECRET_KEY, {
          expiresIn: '1h'
        })
        //Add token to user object
        const session = await prisma.session.findFirst({
          where: {
            userDataId: response.id
          }
        })
        const expires = new Date()
        expires.setHours(expires.getHours() + 1) // Set cookie expiration time to 1 hour from now

        if (session) {
          await prisma.session.update({
            where: {
              userDataId: response.id
            },
            data: {
              createdAt: new Date(),
              expiry: expires,
              sessionToken
            }
          })
        } else {
          await prisma.session.create({
            data: {
              expiry: expires,
              sessionToken,
              user: {
                connect: {
                  id: response.id
                }
              }
            }
          })
        }

        // Set the cookie
        res.setHeader(
          'Set-Cookie',
          `userToken=${sessionToken}; Path=/; Expires=${expires.toUTCString()}; HttpOnly`
        )

        res.send(response)
      } else {
        console.log('ERROR')
        res.send(false)
      }
    }
  } catch (e) {
    console.log(e)
    res.send(false)
  }
}
