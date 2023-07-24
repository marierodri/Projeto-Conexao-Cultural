const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },

    username: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },

    interests: {
      type: [String],
      required: true
    },

    email: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    }
  },
  
  { timestamp: true }
)

const Model = mongoose.model("User", userSchema)

module.exports = Model

