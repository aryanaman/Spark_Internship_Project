const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/userInfo', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
  console.log('Mongo Connection open');
})
.catch(err =>{
  console.log("Mongo Connection Error");
  console.log(err);
});

const seedData =[
  {
      accountNumber : 100256,
      name : 'Aryan Gaurav',
      email: 'aryagaurav89@hmail.com',
      balance: 15000
    },
    {
      accountNumber: 100257,
      name:'Sumona Singh',
      email:'krisumona@yahoo.com',
      balance: 55000
    },
    {
      accountNumber: 100258,
      name: 'Naveen Patel',
      email: 'patelnaveen@reddit.com',
      balance:37000
    },
    {
      accountNumber:100259,
      name:'Anubhav Mina',
      email:'anubhavmina@gmail.com',
      balance: 67000
    },
    {
      accountNumber: 100260,
      name: 'Prasad',
      email:'prasad@gmail.com',
      balance: 43000
    },
    {
      accountNumber:100261,
      name:'Ram Kumar',
      email: 'ramkr905@reddit.com',
      balance: 62000
    },
    {
      accountNumber:100262,
      name: 'Ankur Kumar Varma',
      email:'krankur@yahoo.com',
      balance:89000
    },
    {
      accountNumber:100263,
      name:'Rishabh Raj',
      email:'rishabhraj@gmail.com',
      balance: 65000
    },
    {
      accountNumber:100264,
      name:'Shyam',
      email:'shyam98@gmail.com',
      balance:76000
    },
    {
      accountNumber:100265,
      name:'Sandhya Kumari',
      email:'sandhya89@gmail.com',
      balance:53000
    }
]


User.insertMany(seedData)
.then(res =>{
  console.log(res)
})
.catch(err =>{
  console.log(err)
});
