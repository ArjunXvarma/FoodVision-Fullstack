require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 3000,
    API_KEY: process.env.API_KEY || 'default-api-key',
    NODE_ENV: process.env.NODE_ENV || 'development',
    FRONTEND_URL: process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL_PROD : process.env.FRONTEND_URL_DEV,
    MODEL_SERVER: process.env.NODE_ENV === 'production' ? process.env.MODEL_SERVER_PROD : process.env.MODEL_SERVER_DEV,
}
