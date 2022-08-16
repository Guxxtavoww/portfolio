const cors = require("cors");
const router = require("express").Router();

const About = require("../models/About");

router.get("/", cors(), async (req, res) => {
    try {
        const abouts = await About.find();

        abouts.length ? res.status(200).json(abouts) : res.status(204).json("Sem conteúdo");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        const about = await About.findById(id);

        about ? res.status(200).json(about) : res.status(204).json("Sem conteúdo");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", cors(), async (req, res) => {
    const newAbout = new About(req.body);

    try {
        const savedAbout = await newAbout.save();

        savedAbout && res.status(200).json(savedAbout);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        const updatedAbout = await About.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        updatedAbout && res.status(200).json(updatedAbout);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        await About.findByIdAndDelete(id);
        
        res.status(200).json("Deletado com sucesso!");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;