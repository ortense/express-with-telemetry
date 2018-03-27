const router = require('express').Router()
const { metrics } = require('express-node-metrics')

router.use((request, response, next) => {
  request.resetMetrics = (request.query.reset||'').toLowerCase() === 'true'
  return next()
})

router.get('/', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.getAll(request.resetMetrics))))

router.get('/process', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.processMetrics(request.resetMetrics))))

router.get('/internal', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.internalMetrics(request.resetMetrics))))

router.get('/api', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.apiMetrics(request.resetMetrics))))

module.exports = router