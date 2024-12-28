const axios = require('axios')
const { FRONTEND_URL } = require('../config/env')

const handleAPIServerhealth = async (req, res) => {
    res.status(200).json({ status: 'API server is running' })
}

const handleFronendServerHealth = (req, res) => {
    const frontendUrl = `${FRONTEND_URL}`
    fetch(frontendUrl)
    .then(response => {
        if (response.ok) {
            res.status(200).json({ status: 'Frontend is running' })
        } else {
            res.status(500).json({ status: 'Frontend is down' })
        }
    })
    .catch(error => {
        res.status(500).json({ status: 'Error connecting to frontend', error: error.message })
    })
}

module.exports = {
    handleAPIServerhealth,
    handleFronendServerHealth
}
