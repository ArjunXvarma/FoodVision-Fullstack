const express = require('express')
const { handleAPIServerhealth, handleFronendServerHealth } = require('../services/healthService')

const router = express.Router()

router.get('/api-server-health', handleAPIServerhealth)

router.get('/frontend-health', handleFronendServerHealth)

module.exports = router
