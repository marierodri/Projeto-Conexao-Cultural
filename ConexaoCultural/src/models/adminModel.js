const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema({
    name: {
        type: String,
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
{ versionKey: false}

);

const Admin = mongoose.model("Admins", adminSchema);

module.exports = Admin