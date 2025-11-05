import express, { Application } from 'express'
import { config } from './config'
import { logger, errorHandler } from './middlewares'
import routes from './routes'

const app: Application = express()

// Middlewares
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', routes)

// Error handler (must be last)
app.use(errorHandler)

const PORT = config.port

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  console.log(`Environment: ${config.nodeEnv}`)
})

export default app
