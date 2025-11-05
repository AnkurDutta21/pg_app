# Prisma Setup Guide

## ✅ Installation Complete

Prisma has been installed and configured for PostgreSQL.

## 📋 Next Steps

### 1. Set up your database connection

Create a `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Update the `DATABASE_URL` in `.env`:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name?schema=public"
```

Replace:
- `username` - Your PostgreSQL username
- `password` - Your PostgreSQL password
- `localhost:5432` - Your PostgreSQL host and port
- `database_name` - Your database name

### 2. Generate Prisma Client

```bash
npm run prisma:generate
```

### 3. Create and run migrations

```bash
npm run prisma:migrate
```

This will:
- Create a migration file
- Apply it to your database
- Generate the Prisma Client

### 4. (Optional) Use Prisma Studio

View and edit your database with a GUI:
```bash
npm run prisma:studio
```

## 📁 What's Been Set Up

### Files Created:
- `prisma/schema.prisma` - Database schema with example User model
- `src/config/database.ts` - Prisma client instance
- `src/services/user.service.ts` - Example service using Prisma

### Configuration:
- Prisma client is exported from `src/config/index.ts`
- Database URL added to `.env.example`
- Prisma scripts added to `package.json`

## 🔧 Available Scripts

- `npm run prisma:generate` - Generate Prisma Client
- `npm run prisma:migrate` - Create and run migrations
- `npm run prisma:studio` - Open Prisma Studio GUI
- `npm run prisma:push` - Push schema changes without migrations (dev only)

## 📖 Usage Example

```typescript
import { prisma } from './config'

// Create a user
const user = await prisma.user.create({
  data: {
    email: 'user@example.com',
    password: 'hashedpassword',
    name: 'John Doe',
  },
})

// Find users
const users = await prisma.user.findMany()

// Update user
const updated = await prisma.user.update({
  where: { id: userId },
  data: { name: 'Jane Doe' },
})

// Delete user
await prisma.user.delete({
  where: { id: userId },
})
```

## 🎯 Example User Model

The schema includes an example User model:

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}
```

## 📚 Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [Prisma Schema Reference](https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference)
- [Prisma Client API](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)

## 🔄 Workflow

1. Define models in `prisma/schema.prisma`
2. Run `npm run prisma:migrate` to create migration
3. Use Prisma Client in your services/controllers
4. Prisma Client is fully type-safe with TypeScript!
