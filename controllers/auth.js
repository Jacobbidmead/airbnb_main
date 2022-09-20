const express = require('express')
const router = express.Router()
const Users = require('../models/users.js')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  Users.create(req.body)
  console.log(req.body)
})

router.get('/logout', (req, res) => {
  res.render()
})

module.exports = router
