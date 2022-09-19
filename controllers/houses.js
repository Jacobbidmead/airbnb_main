const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('../views')
})

router.get('/create', (req, res) => {
  res.render('../views')
})

router.get('/:id', (req, res) => {
  res.render('../views')
})

router.get('/:id/edit', (req, res) => {
  res.render('../views')
})

router.post('/', (req, res) => {
  res.render('../views')
})

router.patch('/:id', (req, res) => {
  res.render('../views')
})

router.delete('/:id', (req, res) => {
  res.render('../views')
})

module.exports = router