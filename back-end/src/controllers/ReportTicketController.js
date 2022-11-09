const ReportTicketService = require("../services/ReportTicketService");

module.exports = {
  buscarTodos: async (req, res) => {
    let json = { error: "", result: [] };

    let turnos = await ReportTicketService.buscarTodos();

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

    let data = req.params.data;

    let turno = await ReportTicketService.buscaMes(data);

    if (turno) {
      json.result = turno;
    }

    res.json(json);
  },

  
};
