const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true
    },
    image: String,
    codeLink: String
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);