let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://suprabhasahoo2002:suprabha@cluster0.g6lqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/codeIDE');

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date:{
    type: Date,
    default: Date.now
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection