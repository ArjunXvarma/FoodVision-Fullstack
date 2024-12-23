const { API_KEY } = require('../config/env')

module.exports = (req, res, next) => {
    const clientApiKey = req.headers['x-api-key']
    if (clientApiKey !== API_KEY) {
        return res.status(403).json({ error: 'Forbidden: Invalid API key' })
    }
    next()
}
