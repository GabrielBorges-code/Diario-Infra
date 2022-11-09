const express = require("express");
const router = express.Router();

const DiaryController = require("./controllers/DiaryController");
const ShiftController = require("./controllers/ShiftController");
const ReportTicketController = require("./controllers/ReportTicketController");

router.get("/diario-infra", DiaryController.buscarTodos);
router.get("/diario-infra/:codigo", DiaryController.buscarUm);
router.post("/diario-infra/", DiaryController.inserir);
router.put("/diario-infra/:codigo", DiaryController.alterar);
router.delete("/diario-infra/:codigo", DiaryController.excluir);

router.get("/passagem-de-turno", ShiftController.buscarTodos);
router.get("/passagem-de-turno/:codigo", ShiftController.buscarUm);
router.post("/passagem-de-turno/", ShiftController.inserir);
router.put("/passagem-de-turno/:codigo", ShiftController.alterar);
router.delete("/passagem-de-turno/:codigo", ShiftController.excluir);

router.get("/relatorio-chamados/", ReportTicketController.buscarTodos);
router.get("/relatorio-chamados/:data", ReportTicketController.buscarUm);

router.get("/relatorio-turnos/", ShiftController.buscarTodos);
router.get("/relatorio-turnos/:data", ShiftController.buscarUm);

module.exports = router;
