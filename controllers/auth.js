const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('../views')
})

router.get('/signup', (req, res) => {
  res.render('../views')
})

router.post('/login', (req, res) => {
  res.render('../views')
})

router.post('/login', (req, res) => {
  res.render('../views')
})

router.get('/logout', (req, res) => {
  res.render('../views')
})

module.exports = router
