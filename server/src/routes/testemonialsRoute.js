const cors = require("cors");
const router = require("express").Router();

const Testemonial = require("../models/Testemonial");

router.get("/", async (req, res) => {
    try {
        const testemunhos = await Testemonial.find();
    
        testemunhos.length ? res.status(200).json(testemunhos) : res.status(204);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const testemunho = await Testemonial.findById(id);

        res.status(200).json(testemunho);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    const newTestemunho = new Testemonial(req.body);

    try {
        const savedTestemonial = await newTestemunho.save();

        res.status(200).json(savedTestemonial);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        const updatedTestemonial = await Testemonial.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json(updatedTestemonial);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        await Testemonial.findByIdAndDelete(id);

        res.status(200).json("Foi");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;