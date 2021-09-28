const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 4, "Password should be longer."]
  },
  email: {

  },
  isParent: {
    type: Boolean,
    required: true,
    default: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    trim: true,
  },
  parentTwo: {
    type: String,
    required: false,
    trim: true,
  },
  student: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student'
    }
  ]
});

const User = model('User', userSchema);

module.exports = User;
