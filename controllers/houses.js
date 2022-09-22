const express = require('express')
const router = express.Router()
const Houses = require('../models/houses.js')

router.get('/', (req, res) => {
  let loggedUser = req.user
  res.render('houses/list', { loggedUser })
})

router.get('/create', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  let loggedUser = req.user
  res.render('houses/create', { loggedUser })
})

router.get('/:id', (req, res) => {
  let loggedUser = req.user
  res.render('houses/one', { loggedUser })
})

router.get('/:id/edit', (req, res) => {
  if (!req.isAuthenticated()) {
    let loggedUser = req.user
    res.redirect('/auth/login', { loggedUser })
  }

  res.render('houses/edit')
})

// houses post function

router.post('/', async (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }

  // filling the houses data

  const createdHouses = await Houses.create(req.body)
  req.login(createdHouses, error => {
    if (error) {
      next(error)
      // use error parameter as it contains information about error
    } else {
      res.redirect('/houses/one')
    }
  })
})

// end

router.patch('/:id', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  res.render('houses/one')
})

router.delete('/:id', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  res.render('houses/one')
})

module.exports = router
