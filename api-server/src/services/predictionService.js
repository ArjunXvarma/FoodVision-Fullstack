const axios = require('axios')
const FormData = require('form-data')
const { Readable } = require('stream')

const handlePrediction = async (req, res) => {
    try {
        const fileStream = new Readable()
        fileStream.push(req.file.buffer)
        fileStream.push(null)

        const formData = new FormData()
        formData.append('file', fileStream, 'image.jpg')

        const headers = {
            ...formData.getHeaders(),
        }

        const response = await axios.post('http://127.0.0.1:5000/predict', formData, { headers })
        res.json({ ...response.data })
    } catch (error) {
        console.error('Error:', error.message)
        res.status(500).json({ error: 'Prediction failed' })
    }
}

module.exports = {
    handlePrediction,
}
