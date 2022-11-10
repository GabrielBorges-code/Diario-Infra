import { useNavigate } from "react-router";

import styles from "./styles.module.css";

import Delete from "../../assets/icons/delete.png";
import View from "../../assets/icons/view.png";

export default function CardShift({
  id,
  shift,
  responsible_NOC,
  date_and_time_shift,
  activy_1,
  activy_2,
  activy_3,
}) {
  const navigate = useNavigate();

  const handleNavigateToPage = (id) => {
    navigate(`/turno-detalhado/${id}`);
  };

  const handleDeleteShift = (id) => {
    const deleteConfirm = window.confirm("Você tem certeza que deseja apagar?");

    if (deleteConfirm) {
      fetch(`http://10.105.80.191:3001/api/passagem-de-turno/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className={styles.card}>
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.tablecolumn}>
              <span>Data:</span> {date_and_time_shift}
            </td>
            <td className={styles.tablecolumn}>
              <span>Turno:</span> {shift}
            </td>
            <td className={styles.tablecolumn}>
              <span>NOC Responsável:</span> {responsible_NOC}
            </td>
            <td className={styles.tableicon} rowSpan="3">
              <p>
                <img
                  className={styles.img}
                  src={View}
                  alt="imagem visualizar"
                  onClick={() => handleNavigateToPage(id)}
                />
              </p>

              <p className={styles.iconsbottom}>
                <img
                  className={styles.img}
                  src={Delete}
                  alt="imagem excluir"
                  onClick={() => handleDeleteShift(id)}
                />
              </p>
            </td>
          </tr>

          <tr>
            <td className={styles.tablecolumn}>
              <span>Ronda na Sala Core:</span> {activy_1}
            </td>
            <td className={styles.tablecolumn}>
              <span>Preencher o documento:</span> {activy_2}
            </td>
            <td className={styles.tablecolumn}>
              <span>Triagem de chamados:</span> {activy_3}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
