const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    works: {
        type: [{ name: String, empresa: String, desc: String }],
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("Experience", ExperienceSchema);