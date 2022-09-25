const express = require('express')
const router = express.Router()
const Houses = require('../models/houses.js')
const Users = require('../models/users.js')

router.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }

  let loggedUser = req.user
  res.render('profile', { loggedUser })
})

router.patch('/', async (req, res) => {
  updateUser = {
    name: req.body.name,
    avatar: req.body.avatar,
    email: req.body.email
  }
  // patch updates the user data object in the db

  let returningUser = await Users.findOneAndUpdate(
    {
      // check if the id matches a user
      _id: req.user._id
    },
    // updates the user information in db
    updateUser,
    { new: true }
  )

  // then renders the profile page
  req.login(returningUser, error => {
    if (error) {
      throw new Error(error)
    } else {
      res.redirect('/profile')
    }
  })
})

module.exports = router
