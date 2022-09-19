const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('/')
})

router.get('/signup', (req, res) => {
  res.render('/')
})

router.post('/login', (req, res) => {
  res.render('/')
})

router.post('/login', (req, res) => {
  res.render('/')
})

router.get('/logout', (req, res) => {
  res.render('/')
})

module.exports = router
