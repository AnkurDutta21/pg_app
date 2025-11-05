import { prisma } from "../config"
import bcrypt from "bcrypt"

async function createUser(email: string, password: string, name?: string) {
    const hashedPassword = await bcrypt.hash(password, 10)
    
    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      },
    })
  }