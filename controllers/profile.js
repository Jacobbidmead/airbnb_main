const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  res.render('profile')
})

router.patch('/', (req, res) => {
  res.render('')
})

module.exports = router
