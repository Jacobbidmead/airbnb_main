const express = require('express')
const router = express.Router()
const Houses = require('../models/houses.js')

router.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }

  let userProfile = req.user
  res.render('profile', { userProfile, house })
})

router.patch('/', (req, res) => {
  updateUser = {
    name: req.body.name,
    avatar: req.body.avatar,
    email: req.body.email,
    password: req.body.password
  }

  loggedUser = res.redirect('/profile')
})

module.exports = router
