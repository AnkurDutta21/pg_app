import { Request, Response } from 'express'

export const healthCheck = (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    statusCode: 200,
    timestamp: new Date().toISOString(),
    message: 'Server is running',
  })
}
