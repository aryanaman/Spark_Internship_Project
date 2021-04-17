const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  accountNumber : {
     type : Number,
     required: true
  },
  name :{
    type : String,
    required:true,
  },
  email : {
    type: String,
    required : true
  },
  balance : {
    type: Number,
    required : true,
    min : 500
  }
})

const User = mongoose.model('User', userSchema);

 module.exports = User;
