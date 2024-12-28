const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const predictRoutes = require('./routes/predict')
const healthRoutes = require('./routes/health')
const { default: logger } = require('./config/logger')

const app = express()

const morganFormat = ":method :url :status :response-time ms"

app.use(
    morgan(morganFormat, {
        stream: {
            write: (message) => {
                // Extract log components from the message
                const [method, url, status, responseTime] = message.split(" ")

                // Format the log as a standard log string
                const logMessage = `[${new Date().toISOString()}] "${method} ${url}" ${status} - ${responseTime}ms`

                // Log the message using your logger
                logger.info(logMessage)
            },
        },
    })
)

app.use(cors())
app.use(express.json())

app.use('/predict', predictRoutes)
app.use('/health', healthRoutes)

module.exports = app
