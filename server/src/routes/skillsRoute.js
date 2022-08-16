const cors = require("cors");
const router = require("express").Router();

const Skill = require("../models/Skill");

router.get("/", cors(), async (req, res) => {
    try {
        const skills = await Skill.find();

        skills.length ? res.status(200).json(skills) : res.status(204).json("Nada");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        const skill = await Skill.findById(id);

        res.status(200).json(skill);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", cors(), async (req, res) => {
    const newSkill = new Skill(req.body);

    try {
        const savedSkill = await newSkill.save();

        res.status(200).json(savedSkill);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", cors(), async (req, res) => {
    const { id } = req.params;
    
    try {
        await Skill.findByIdAndDelete(id);

        res.status(200).json("Deletado");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;