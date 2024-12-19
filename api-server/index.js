const express = require('express')
const multer = require('multer')
const axios = require('axios')
const cors = require('cors')

const app = express()
const upload = multer()
const PORT = 3000

app.use(cors())

app.post('/predict', upload.single('image'), async (req, res) => {
    try {
        const formData = new FormData()
        formData.append('file', req.file.buffer, 'image.jpg')

        const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
            headers: formData.getHeaders(),
        })

        res.json(response.data)
    } catch (error) {
        console.error('Error:', error)
        res.status(500).json({ error: 'Prediction failed' })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
