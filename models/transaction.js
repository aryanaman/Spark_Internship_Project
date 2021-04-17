const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transferFrom : String,
  transferTo : String,
  amount : Number
});

const Transaction = mongoose.model('Transaction',transactionSchema);



module.exports =  Transaction ;
