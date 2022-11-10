import styles from "./styles.module.css";

import Delete from "../../assets/icons/delete.png";
import View from "../../assets/icons/view.png";
import { useNavigate } from "react-router";

export default function Card({
  id,
  turno,
  dataEHora,
  nChamado,
  tipoRequisicao,
  nocResponsavel,
  prioridade,
}) {
  const navigate = useNavigate();

  const handleNavigateToPage = (id) => {
    navigate(`/chamado-detalhado/${id}`);
  };

  const handleDeleteShift = (id) => {
    const deleteConfirm = window.confirm("Você tem certeza que deseja apagar?");

    if (deleteConfirm) {
      fetch(`http://localhost:3001/api/diario-infra/${id}`, {
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
              <span>Turno:</span> {turno}
            </td>
            <td className={styles.tablecolumn}>
              <span>Data e Hora:</span> {dataEHora}
            </td>
            <td className={styles.tablecolumn}>
              <span>NOC Responsável:</span> {nocResponsavel}
            </td>

            <td className={styles.tableicon} rowSpan="4">
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
              <span>Nº do Chamado:</span> {nChamado}{" "}
            </td>
            <td className={styles.tablecolumn}>
              <span>Tipo de Requisição:</span> {tipoRequisicao}
            </td>
            <td className={styles.tablecolumn}>
              <span>Prioridade:</span> {prioridade}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
