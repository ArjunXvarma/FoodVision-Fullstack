const express = require('express')
const cors = require('cors')
const predictRoutes = require('./routes/predict')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/predict', predictRoutes)

module.exports = app
