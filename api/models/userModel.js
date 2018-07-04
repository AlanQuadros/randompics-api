'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the user'
  },
  senha: {
    type: String,
    required: 'Kindly enter the name of the senha'
  },
  email: {
    type: String,
    required: 'Kindly enter the name of the email'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  
  fotos : [String],
  
});

module.exports = mongoose.model('Users', UserSchema);