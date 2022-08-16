const mongoose = require("mongoose");

const TestemonialSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        required: true,
    },
    company: String
}, { timestamps: true });

module.exports = mongoose.model("Testemonial", TestemonialSchema);