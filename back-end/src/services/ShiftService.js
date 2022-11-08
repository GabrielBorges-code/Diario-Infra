const db = require("../db");

module.exports = {
  buscarTodos: () => {
    return new Promise((aceito, rejeitado) => {
      db.query("SELECT * FROM shift", (error, results) => {
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
        "SELECT * FROM shift WHERE id = ?",
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
    responsible_NOC,
    date_and_time_shift,
    activy_1,
    activy_2,
    activy_3,
    activy_4,
    activy_5,
    note
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        // "INSERT INTO carros (modelo, placa) VALUES (?, ?)",
        "INSERT INTO shift (shift, responsible_NOC,date_and_time_shift, activy_1, activy_2, activy_3, activy_4, activy_5, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          shift,
          responsible_NOC,
          date_and_time_shift,
          activy_1,
          activy_2,
          activy_3,
          activy_4,
          activy_5,
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
    responsible_NOC,
    date_and_time_shift,
    activy_1,
    activy_2,
    activy_3,
    activy_4,
    activy_5,
    note,
    codigo
  ) => {
    return new Promise((aceito, rejeitado) => {
      db.query(
        "UPDATE shift SET shift = ?, responsible_NOC = ?,date_and_time_shift = ?, activy_1 = ?, activy_2 = ?, activy_3 = ?, activy_4 = ?, activy_5 = ?, note = ? WHERE id = ?",
        [
          shift,
          responsible_NOC,
          date_and_time_shift,
          activy_1,
          activy_2,
          activy_3,
          activy_4,
          activy_5,
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
      db.query("DELETE FROM shift WHERE id = ?", [codigo], (error, results) => {
        if (error) {
          rejeitado(error);
          return;
        }
        aceito(results);
      });
    });
  },
};
