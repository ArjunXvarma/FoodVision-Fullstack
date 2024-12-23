const express = require('express')
const multer = require('multer')
const { handlePrediction } = require('../services/predictionService')
const validateApiKey = require('../middleware/validateApiKey')

const router = express.Router()
const upload = multer()

router.post('/', validateApiKey, upload.single('file'), handlePrediction)

module.exports = router
