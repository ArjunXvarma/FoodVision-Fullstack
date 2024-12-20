const express = require('express')
const multer = require('multer')
const axios = require('axios')
const cors = require('cors')
const FormData = require('form-data') 
const dotenv = require('dotenv')
const { Readable } = require('stream')

dotenv.config()
const app = express()
const upload = multer()
const PORT = process.env.PORT

const API_KEY = process.env.API_KEY

app.use(cors())

app.post('/predict', upload.single('file'), async (req, res) => {
    try {
        const fileStream = new Readable()
        fileStream.push(req.file.buffer)
        fileStream.push(null)

        const formData = new FormData()
        formData.append('file', fileStream, 'image.jpg')

        const headers = {
            ...formData.getHeaders(), 
            'X-API-Key': API_KEY
        }
        const response = await axios.post('http://127.0.0.1:5000/predict', formData, { headers })
        res.json({
            ...response.data,
            response_time: response.headers['x-response-time'] 
        })
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ error: 'Prediction failed' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
