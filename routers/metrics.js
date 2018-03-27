const router = require('express').Router()
const { metrics } = require('express-node-metrics')

router.get('/', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.getAll(request.query.reset === 'true'))))

router.get('/process', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.processMetrics(request.query.reset === 'true'))))

router.get('/internal', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.internalMetrics(request.query.reset === 'true'))))

router.get('/api', (request, response) => 
  response.status(200)
    .json(JSON.parse(metrics.apiMetrics(request.query.reset === 'true'))))

module.exports = router