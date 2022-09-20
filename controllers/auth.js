const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/', (req, res) => {
  res.render()
})

router.get('/logout', (req, res) => {
  res.render()
})

module.exports = router
