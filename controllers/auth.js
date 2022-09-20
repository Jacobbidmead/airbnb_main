const express = require('express')
const router = express.Router()
const Users = require('../models/users.js')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', async (req, res) => {
  const foundUser = await Users.create(req.body)
  req.login(foundUser, error => {
    if (error) {
      // something
    } else {
      res.redirect('/houses')
    }
  })
})

router.get('/logout', (req, res) => {
  res.render()
})

module.exports = router
