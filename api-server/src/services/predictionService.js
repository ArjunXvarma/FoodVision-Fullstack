const axios = require('axios')
const FormData = require('form-data')
const { Readable } = require('stream')
const { API_KEY, MODEL_SERVER, NODE_ENV } = require('../config/env')
const { default: logger } = require('../config/logger')

const handlePrediction = async (req, res) => {
    try {
        logger.info(`Received a prediction request: Content-Type=${req.headers['content-type']}, File size=${req.file?.size || 'unknown'} bytes`)

        logger.info(`Sending request to model server: ${MODEL_SERVER}`)

        const fileStream = new Readable()
        fileStream.push(req.file.buffer)
        fileStream.push(null)

        const formData = new FormData()
        formData.append('file', fileStream, 'image.jpg')

        const headers = {
            'x-api-key': API_KEY,
            ...formData.getHeaders(),
        }

        logger.debug(`Headers: ${JSON.stringify(headers)}`)
        logger.debug(`Form data constructed for prediction`)

        const response = await axios.post(`${MODEL_SERVER}/predict`, formData, { headers })

        logger.info(`Prediction successful: Status=${response.status}`)

        res.json({ ...response.data })
    } catch (error) {
        logger.error(`Error during prediction: ${error.message}`)
        if (error.response) {
            logger.error(`Response from model server: Status=${error.response.status}, Data=${JSON.stringify(error.response.data)}`)
        }
        res.status(500).json({ error: 'Prediction failed' })
    }
}

module.exports = {
    handlePrediction,
}
