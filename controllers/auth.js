const express = require('express')
const router = express.Router()
const Users = require('../models/users.js')

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', async (req, res, next) => {
  try {
    let foundUsers = await Users.countDocuments({
      email: req.body.email
    })

    // countDocuments gives the number of users that match the condtion
    // if that number is more than 0 then function stops

    if (foundUsers > 0) {
      throw new Error('User with this email already exists')
    }
    // foundUser is returning an array
  } catch (err) {
    next(err)
  }

  const createdUser = await Users.create(req.body)
  req.login(createdUser, error => {
    if (error) {
      next(error)
      // use error parameter as it contains information about error
    } else {
      res.redirect('/houses')
    }
  })
})

router.get('/logout', (req, res) => {
  res.render()
})

module.exports = router
