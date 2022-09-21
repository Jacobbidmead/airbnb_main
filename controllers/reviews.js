const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }
  res.render('reviews')
})

module.exports = router
