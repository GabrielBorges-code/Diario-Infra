const ShiftService = require("../services/ShiftService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let shifts = await ShiftService.buscarTodos();

    for (let i in shifts) {
      json.result.push({
        id: shifts[i].id,
        shift: shifts[i].shift,
        responsible_NOC: shifts[i].responsible_NOC,
        date_and_time_shift: shifts[i].date_and_time_shift,
        activy_1: shifts[i].activy_1,
        activy_2: shifts[i].activy_2,
        activy_3: shifts[i].activy_3,
        activy_4: shifts[i].activy_4,
        activy_5: shifts[i].activy_5,
        note: shifts[i].note,
      });
    }

    res.json(json);
  },

  buscarUm: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;

    let shift = await ShiftService.buscarUm(codigo);

    if (shift) {
      json.result = shift;
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let activy_1;
    let activy_2;
    let activy_3;
    let activy_4;
    let activy_5;

    if (req.body.activy_1 === true) {
      activy_1 = "feito";
    } else {
      activy_1 = "inconcluído";
    }

    if (req.body.activy_2 === true) {
      activy_2 = "feito";
    } else {
      activy_2 = "inconcluído";
    }

    if (req.body.activy_3 === true) {
      activy_3 = "feito";
    } else {
      activy_3 = "inconcluído";
    }

    if (req.body.activy_4 === true) {
      activy_4 = "feito";
    } else {
      activy_4 = "inconcluído";
    }

    if (req.body.activy_5 === true) {
      activy_5 = "feito";
    } else {
      activy_5 = "inconcluído";
    }

    let shift = req.body.shift;
    let responsible_NOC = req.body.responsible_NOC;
    let date_and_time_shift = req.body.date_and_time_shift;
    // let activy_1 = req.body.activy_1;
    // let activy_2 = req.body.activy_2;
    // let activy_3 = req.body.activy_3;
    // let activy_4 = req.body.activy_4;
    // let activy_5 = req.body.activy_5;
    let note = req.body.note;

    if (responsible_NOC) {
      // verifica se o turno foi preenchido, se se sim ele executa a query
      await ShiftService.inserir(
        shift,
        responsible_NOC,
        date_and_time_shift,
        activy_1,
        activy_2,
        activy_3,
        activy_4,
        activy_5,
        note
      );
      json.result = {
        shift,
        responsible_NOC,
        date_and_time_shift,
        activy_1,
        activy_2,
        activy_3,
        activy_4,
        activy_5,
        note,
      };
    } else {
      json.error = "Campos não enviados";
    }
    res.json(json);
  },

  alterar: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;

    let shift = req.body.shift;
    let responsible_NOC = req.body.responsible_NOC;
    let date_and_time_shift = req.body.date_and_time_shift;
    let activy_1 = req.body.activy_1;
    let activy_2 = req.body.activy_2;
    let activy_3 = req.body.activy_3;
    let activy_4 = req.body.activy_4;
    let activy_5 = req.body.activy_5;
    let note = req.body.note;

    if (codigo) {
      await ShiftService.alterar(
        shift,
        responsible_NOC,
        date_and_time_shift,
        activy_1,
        activy_2,
        activy_3,
        activy_4,
        activy_5,
        note,
        codigo
      );

      json.result = {
        // codigo,
        shift,
        responsible_NOC,
        date_and_time_shift,
        activy_1,
        activy_2,
        activy_3,
        activy_4,
        activy_5,
        note,
      };

      // console.log(result);
    } else {
      json.error = "Campos não atualizados";
    }

    res.json(json);
  },

  excluir: async (req, res) => {
    let json = { error: "", result: {} };

    await ShiftService.excluir(req.params.codigo);

    res.json(json);
  },
};
