const cors = require("cors");
const router = require("express").Router();

const Project = require("../models/Project");

router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();

        projects.length ? res.status(200).json(projects) : res.status(204).json("Sem conteudo");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findById(id);

        project ? res.status(200).json(project) : res.status(204).json("Sem conteudo");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post("/", async (req, res) => {
    const newProject = new Project(req.body);

    try {
        const savedProject = await newProject.save();

        res.status(200).json(savedProject);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        const updatedProject = await Project.findByIdAndUpdate(id, { $set: req.body }, { new: true });

        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete("/:id", cors(), async (req, res) => {
    const { id } = req.params;

    try {
        await Project.findByIdAndDelete(id);

        res.status(200).json("Projeto Deletado");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;