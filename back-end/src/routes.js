const express = require("express");
const router = express.Router();

const CarroController = require("./controllers/CarroController");

router.get("/diario-infra", CarroController.buscarTodos);
router.get("/diario-infra/:codigo", CarroController.buscarUm);
router.post("/diario-infra/", CarroController.inserir);
router.put("/diario-infra/:codigo", CarroController.alterar);
router.delete("/diario-infra/:codigo", CarroController.excluir);

module.exports = router;