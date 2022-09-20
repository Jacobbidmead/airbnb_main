const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  res.send()
  console.log('works')
})

router.get('/logout', (req, res) => {
  res.render()
})

module.exports = router
