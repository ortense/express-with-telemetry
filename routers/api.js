const uuid = require('uuid')
const { cloneDeep } = require('lodash')
const router = require('express').Router()

const storage = { data: [] }

const findById = (request, response, next) => {
  request.data = {}
  request.data.object = storage.data.find((item, index) => {
    request.data.index = index
    return item.id === request.params.id
  })
  if (!request.data.object) return response.status(404).json({ error: 'object not found' })
  return next()
}

router.get('/', (request, response) =>
  response.status(200).json(storage))

router.post('/', (request, response) => {
  const object = {
    ...cloneDeep(request.body),
    id: uuid.v4(),
    created_at: new Date(),
    updated_at: new Date(),
  }

  storage.data.push(object)
  return response.status(201).json(object)
})

router.get('/:id', findById, (request, response) => 
  response.status(200).json(request.data.object))

router.put('/:id', findById, (request, response) =>
  response.status(200).json(storage.data[request.data.index] = {
    ...cloneDeep(request.body),
    id: request.params.id,
    created_at: request.data.object.created_at,
    updated_at: new Date(),
  }))

router.delete('/:id', findById, (request, response) => {
  const actual = cloneDeep(request.data.object)
  const filtered = storage.data.filter(item => item.id !== actual.id)
  storage.data = filtered
  return response.status(200).json(actual)
})

module.exports = router