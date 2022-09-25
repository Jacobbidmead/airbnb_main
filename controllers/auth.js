const express = require('express')
const router = express.Router()
const Users = require('../models/users.js')

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', async (req, res, next) => {
  let findUser = await Users.findOne({
    email: req.body.email,
    password: req.body.password
  })
  // if foundUseruser is found the stop the function
  try {
    if (!findUser) {
      throw new Error('Email or Password invalid')
    } else {
      req.login(findUser, error => {
        if (error) {
          throw new Error(error)
          // use error parameter as it contains information about error
        } else {
          res.redirect('/houses')
        }
      })
    }
  } catch (error) {
    next(error)
  }
})

// log in that user above

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
  // create a user (user data in db) from the information passed to the form
  req.login(createdUser, error => {
    // req,login = log in that user who has been created, then check for errors
    if (error) {
      next(error)
      // use error parameter as it contains information about error
    } else {
      res.redirect('/houses')
      // if not error, redirct to houses page
    }
  })
})

router.get('/logout', (req, res, next) => {
  // try to catch all errors
  try {
    // add logout method from passport
    req.logout(err => {
      if (err) {
        throw err
      }
    })

    // deletes the session in the DB
    req.session.destroy(err => {
      if (err) {
        throw err
      }
      res.clearCookie('connect.sid')
      // redirects to log in page
      res.redirect('/auth/login')
    })
  } catch (err) {
    next(err)
  }
})

module.exports = router
