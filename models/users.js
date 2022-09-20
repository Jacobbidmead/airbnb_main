const mongoose = require('mongoose')

module.exports = mongoose.model('users', {
  avatar: String,
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
})
