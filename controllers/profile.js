const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('profile')
})

router.patch('/', (req, res) => {
  res.render('')
})

module.exports = router
