require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const aboutRoute = require("./routes/aboutRoute");
const skillsRoute = require("./routes/skillsRoute");
const projectsRoute = require("./routes/projectsRoute");
const expirencesRoute = require("./routes/experiencesRoute");
const testemonialsRoute = require("./routes/testemonialsRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(app.listen(PORT, () => console.log("Server Rodando"))).catch(error => console.log(error));

app.use("/server/sobre", aboutRoute);
app.use("/server/skills", skillsRoute);
app.use("/server/projetos", projectsRoute);
app.use("/server/experiencias", expirencesRoute);
app.use("/server/testemunhos", testemonialsRoute);

app.get("/server/tags", cors(), (req, res) => {
    const tags = [ "React JS", "Typescript", "Firebase", "Node JS", "Banco de Dados", "Todos" ];

    res.json(tags);
});

app.get("/", (req, res) => res.send("Olá, Heroku!"));