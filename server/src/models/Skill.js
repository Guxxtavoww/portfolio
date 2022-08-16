const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("Skill", SkillSchema);