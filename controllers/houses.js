const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('houses/list')
})

router.get('/create', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  res.render('houses/create')
})

router.get('/:id', (req, res) => {
  res.render('houses/one')
})

router.get('/:id/edit', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }

  res.render('houses/edit')
})

router.post('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  res.render('houses/list')
})

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
