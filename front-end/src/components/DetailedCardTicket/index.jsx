import styles from "./styles.module.css";

export default function DetailedCardTicket({
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
              <span>Data e Hora:</span> {date_and_time_ticket}
            </td>
            <td className={styles.tablecolumn}>
              <span>NOC Responsável:</span> {responsible_NOC}
            </td>
          </tr>

          <tr>
            <td className={styles.tablecolumn}>
              <span>Nº do Chamado:</span> {num_ticket}
            </td>
            <td className={styles.tablecolumn}>
              <span>Tipo de Requisição:</span> {requisition_type}
            </td>
            <td className={styles.tablecolumn}>
              <span>Prioridade:</span> {priority}
            </td>
          </tr>

          <tr>
            <td className={styles.tablecolumn}>
              <span>Houve Intermitência:</span> {intermittent}
            </td>
            <td className={styles.tablecolumn}>
              <span>Ilha Responsável:</span> {responsible_island}
            </td>
            <td className={styles.tablecolumn}>
              <span>Responsável Acionado:</span> {responsible_triggered}
            </td>
          </tr>

          <tr>
            <td className={styles.tablecolumn}>
              <span>Hora do Acionamento:</span> {activation_time}
            </td>
            <td className={styles.tablecolumn}>
              <span>Fora do Expediente:</span> {out_of_office}
            </td>
            <td className={styles.tablecolumn}>
              <span>Status do Chamado:</span> {status}
            </td>
          </tr>
          <tr>
            <td className={styles.tablecolumn}>
              <span>Email de Aivo:</span> {warning_email}
            </td>
            <td className={styles.tablecolumn}>
              <span>Tipo de Acionamento:</span> {type_of_activation}
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
