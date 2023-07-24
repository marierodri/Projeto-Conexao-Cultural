const mongoose = require("mongoose");

const ActvitiesSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId(),
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      minLength: 0,
      maxLength: 500,
      default: "Uninformed"
    },

    schedule: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    maxParticipants: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

const Model = mongoose.model("Activities", ActvitiesSchema);

module.exports = Model;
