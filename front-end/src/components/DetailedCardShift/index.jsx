import React from 'react';

import styles from './styles.module.css';

function DetailedCardShift({ 
  date_and_time_shift,
  shift,
  responsible_NOC,
  activy_1,
  activy_2,
  activy_3,
  activy_4,
  activy_5,
  note
}) {
  return (
    <div className={styles.card}>
    <table className={styles.table}>
      <tbody>
        <tr>
          <td className={styles.tablecolumn}>
            <span>Turno:</span> {shift}
          </td>
          <td className={styles.tablecolumn}>
            <span>Data e Hora:</span> {date_and_time_shift}
          </td>
          <td className={styles.tablecolumn}>
            <span>NOC Responsável:</span> {responsible_NOC}
          </td>
        </tr>

        <tr>
          <td className={styles.tablecolumn}>
            <span>Nº do Chamado:</span> {activy_1}
          </td>
          <td className={styles.tablecolumn}>
            <span>Tipo de Requisição:</span> {activy_2}
          </td>
          <td className={styles.tablecolumn}>
            <span>Prioridade:</span> {activy_3}
          </td>
        </tr>

        <tr>
          <td className={styles.tablecolumn}>
            <span>Houve Intermitência:</span> {activy_4}
          </td>
          <td className={styles.tablecolumn}>
            <span>Ilha Responsável:</span> {activy_5}
          </td>
          <td className={styles.tablecolumn}>
            <span>Responsável Acionado:</span> 
          </td>
        </tr>

        <tr>
          <td colSpan="4" className={styles.tablecolumn}>
            <span>Obvervação:</span> {note}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default DetailedCardShift;