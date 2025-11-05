import dotenv from 'dotenv'

dotenv.config()

export const config = {
  port: process.env.PORT || 4002,
  nodeEnv: process.env.NODE_ENV || 'development',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  databaseUrl: process.env.DATABASE_URL,
}

export { default as prisma } from './database'
