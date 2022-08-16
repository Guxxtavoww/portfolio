const cors = require("cors");
const router = require("express").Router();

const Experience = require("../models/Experience");

router.get("/", async (req, res) => {
    try {
        const experiences = await Experience.find();

        experiences.length ? res.status(200).json(experiences) : res.status(204).json("Sem conteudo");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const experience = await Experience.findById(id);

        res.status(200).json(experience)
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    const newExperience = new Experience(req.body);

    try {
        const savedExperience = await newExperience.save();

        savedExperience && res.status(200).json(savedExperience);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", cors(), async (req, res) => {
    const { id } = req.params;
    const { year, works } = req.body;

    try {
        const updatedExperience = await Experience.findByIdAndUpdate(id, { $set: year, $push: { works: works } }, { new: true });

        res.status(200).json(updatedExperience);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        await Experience.findByIdAndDelete(id);

        res.status(200).json("Foi");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;