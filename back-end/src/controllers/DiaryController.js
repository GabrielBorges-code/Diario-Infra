const DiaryService = require("../services/DiaryService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let turnos = await DiaryService.buscarTodos();

    for (let i in turnos) {
      json.result.push({
        id: turnos[i].id,
        shift: turnos[i].shift,
        date_and_time_ticket: turnos[i].date_and_time_ticket,
        num_ticket: turnos[i].num_ticket,
        requisition_type: turnos[i].requisition_type,
        responsible_NOC: turnos[i].responsible_NOC,
        priority: turnos[i].priority,
        intermittent: turnos[i].intermittent,
        responsible_island: turnos[i].responsible_island,
        responsible_triggered: turnos[i].responsible_triggered,
        activation_time: turnos[i].activation_time,
        out_of_office: turnos[i].out_of_office,
        status: turnos[i].status,
        warning_email: turnos[i].warning_email,
        type_of_activation: turnos[i].type_of_activation,
        note: turnos[i].note,
      });
    }

    res.json(json);
  },

  buscarUm: async (req, res) => {
    let json = { error: "", result: {} };

    let codigo = req.params.codigo;

    let turno = await DiaryService.buscarUm(codigo);

    if (turno) {
      json.result = turno;
    }

    res.json(json);
  },

  inserir: async (req, res) => {
    let json = { error: "", result: {} };

    let shift = req.body.shift;
    let date_and_time_ticket = req.body.date_and_time_ticket;
    let num_ticket = req.body.num_ticket;
    let requisition_type = req.body.requisition_type;
    let responsible_NOC = req.body.responsible_NOC;
    let priority = req.body.priority;
    let intermittent = req.body.intermittent;
    let responsible_island = req.body.responsible_island;
    let responsible_triggered = req.body.responsible_triggered;
    let activation_time = req.body.activation_time;
    let out_of_office = req.body.out_of_office;
    let status = req.body.status;
    let warning_email = req.body.warning_email;
    let type_of_activation = req.body.type_of_activation;
    let note = req.body.note;

    if (shift) {
      // verifica se o turno foi preenchido, se se sim ele executa a query
      await DiaryService.inserir(
        shift,
        date_and_time_ticket,
        num_ticket,
        requisition_type,
        responsible_NOC,
        priority,
        intermittent,
        responsible_island,
        responsible_triggered,
        activation_time,
        out_of_office,
        status,
        warning_email,
        type_of_activation,
        note
      );
      json.result = {
        shift,
        date_and_time_ticket,
        num_ticket,
        requisition_type,
        responsible_NOC,
        priority,
        intermittent,
        responsible_island,
        responsible_triggered,
        activation_time,
        out_of_office,
        status,
        warning_email,
        type_of_activation,
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
    let date_and_time_ticket = req.body.date_and_time_ticket;
    let num_ticket = req.body.num_ticket;
    let requisition_type = req.body.requisition_type;
    let responsible_NOC = req.body.responsible_NOC;
    let priority = req.body.priority;
    let intermittent = req.body.intermittent;
    let responsible_island = req.body.responsible_island;
    let responsible_triggered = req.body.responsible_triggered;
    let activation_time = req.body.activation_time;
    let out_of_office = req.body.out_of_office;
    let status = req.body.status;
    let warning_email = req.body.warning_email;
    let type_of_activation = req.body.type_of_activation;
    let note = req.body.note;

    if (codigo) {
      await DiaryService.alterar(
        shift,
        date_and_time_ticket,
        num_ticket,
        requisition_type,
        responsible_NOC,
        priority,
        intermittent,
        responsible_island,
        responsible_triggered,
        activation_time,
        out_of_office,
        status,
        warning_email,
        type_of_activation,
        note,
        codigo
      );

      json.result = {
        // codigo,
        shift,
        date_and_time_ticket,
        num_ticket,
        requisition_type,
        responsible_NOC,
        priority,
        intermittent,
        responsible_island,
        responsible_triggered,
        activation_time,
        out_of_office,
        status,
        warning_email,
        type_of_activation,
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

    await DiaryService.excluir(req.params.codigo);

    res.json(json);
  },
};
