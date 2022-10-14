const express = require("express");
const router = express.Router();

const DiaryController = require("./controllers/DiaryController");

router.get("/diario-infra", DiaryController.buscarTodos);
router.get("/diario-infra/:codigo", DiaryController.buscarUm);
router.post("/diario-infra/", DiaryController.inserir);
router.put("/diario-infra/:codigo", DiaryController.alterar);
router.delete("/diario-infra/:codigo", DiaryController.excluir);

module.exports = router;
