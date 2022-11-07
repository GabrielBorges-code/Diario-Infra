require("dotenv").config({ path: "variaveis.env" });

const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");

const routes = require("./routes");

const server = express();

server.use(bodyParse.json());

server.use(cors());
server.use(bodyParse.urlencoded({ extended: false }));

server.use("/api", routes);

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
