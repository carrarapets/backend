import { PrismaClient } from '@prisma/client'
import express from 'express'

const prismaClient = new PrismaClient();
const app = express()

app.use(express.json())
app.get('/users', async (req, res) => {
    const users = await  prismaClient.user.findMany();
    res.json(users)
  })
  app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)

export default prismaClient;

