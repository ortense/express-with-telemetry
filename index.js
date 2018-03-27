const app = require('express')()
const parser = require('body-parser')
const expressMetrics = require('express-node-metrics')

app.use(parser.json())
app.use(expressMetrics.middleware)
app.use('/api', require('./routers/api'))
app.use('/metrics', require('./routers/metrics'))
app.use((error, request, response, next) => 
  response.status(500).json({
    error: error.name || 'Internal',
    message: error.message
  }))

app.listen(3000, () => console.log('server up on http://localhost:3000'))