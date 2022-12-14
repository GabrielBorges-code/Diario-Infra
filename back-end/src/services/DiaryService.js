const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM ticket_itsm", (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },

  buscarUm: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "SELECT * FROM ticket_itsm WHERE id = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          if (results.length > 0) {
            aceito(results[0]);
          } else {
            aceito(false);
          }
        }
      );
    });
  },

  inserir: (
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
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        // "INSERT INTO carros (modelo, placa) VALUES (?, ?)",
        "INSERT INTO ticket_itsm (shift, date_and_time_ticket, num_ticket, requisition_type, responsible_NOC, priority, intermittent, responsible_island, responsible_triggered, activation_time, out_of_office, status, warning_email, type_of_activation, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
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
        ],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results.insertCodigo); //insertId
        }
      );
    });
  },

  alterar: (
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
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        // "UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?",
        "UPDATE shift SET ticket_itsm = ?, date_and_time_ticket = ?, num_ticket = ?, requisition_type = ?, responsible_NOC = ?, priority = ?, intermittent = ?, responsible_island = ?, responsible_triggered = ?, activation_time = ?, out_of_office = ?, status = ?, warning_email = ?, type_of_activation = ?, note = ? WHERE id = ?",
        [
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
          codigo,
        ],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },

  excluir: (codigo) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "DELETE FROM ticket_itsm WHERE id = ?",
        [codigo],
        (error, results) => {
          if (error) {
            rejeitado(error);
            return;
          }
          aceito(results);
        }
      );
    });
  },
};
