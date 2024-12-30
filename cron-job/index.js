const cron = require('node-cron')
const axios = require('axios')

const services = [
    { name: 'API Server', url: 'https://food-vision-api-server.onrender.com/health/api-server-health' },
    { name: 'Model Server', url: 'https://food-vision-model-server.onrender.com/health' },
    { name: 'Frontend Server', url: 'https://food-vision-api-server.onrender.com/health/frontend-health' },
    { name: 'TF Model Serving Service', url: 'https://food-pred-serving.onrender.com' }
]

const keepAlive = async () => {
    for (const service of services) {
        try {
            const response = await axios.get(service.url)
            console.log(`[${new Date().toISOString()}] ${service.name}: ${response.status} - ${response.statusText}`)
        } catch (error) {
            console.error(`[${new Date().toISOString()}] ${service.name}: Error - ${error.message}`)
        }
    }
}

// Cron schedule for every 5 minutes
cron.schedule('*/5 * * * *', () => {
    console.log('Running keep-alive job...')
    keepAlive()
})
  
console.log('Cron job scheduled to keep services alive.')