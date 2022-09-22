const express = require('express')
const router = express.Router()
const Houses = require('../models/houses.js')

router.get('/', async (req, res, next) => {
  let eachHouse = await Houses.find({})
  // finds all houses data
  // find returns array

  let loggedUser = req.user
  // req.user is the user that is logged in and data inside can be accessed via . notation e.g req.user.name. this can then be logged a variable and added to hbs code and {{}}
  res.render('houses/list', { loggedUser, eachHouse })
  // pass eachhouse as object
})

router.get('/create', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  let loggedUser = req.user
  res.render('houses/create', { loggedUser })
})

// one house

router.get('/:id', async (req, res, next) => {
  try {
    let house = await Houses.findById(req.params.id).populate('host')
    // find houses by id. params gets the vaule from the route ('/:id') then populates 'host' data which has been imported into houses db
    // house object
    let loggedUser = req.user
    res.render('houses/one', { loggedUser, house })
  } catch (error) {
    next(error)
  }
})

// end

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
  req.body.host = req.user._id
  // adds the users object to the houses object via the user id, which can be accessed later
  const createdHouse = await Houses.create(req.body)

  req.login(createdHouse, error => {
    if (error) {
      next(error)
      // use error parameter as it contains information about error
    } else {
      res.redirect(`/houses/${createdHouse._id}`)
      // replaces /createdhouses._id with actual id data from db.
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
