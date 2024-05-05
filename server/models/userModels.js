const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
  },
  age: {
    type: Number,
    required: [true, "A user must enter their age"],
  },
  height: {
    type: Number,
    required: [true, "A user must enter their height"],
  },
  weight: {
    type: Number,
    required: [true, "A user must enter their weight"],
  },
  profilePicture:{
    type:String,
    default:"default.jpg"
  }
});

const User = mongoose.model('User', userSchema)
module.exports = User