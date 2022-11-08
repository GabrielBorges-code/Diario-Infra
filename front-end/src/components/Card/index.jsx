import style from "./style.module.css";

// import Edit from "../../assets/icons/edit.png";
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

  // const handleNavigateToEditPage = (id) => {
  //   // window.alert(id)
  //   navigate(`/editar-chamado/${id}`)
  // }

  return (
    <div className={style.card}>
      <table className={style.table}>
        <tbody>
          
          <tr>
            <td className={style.tablecolumn}>
              <span>Turno:</span> {turno}
            </td>
            <td className={style.tablecolumn}>
              <span>Data e Hora:</span> {dataEHora}
            </td>
            <td className={style.tablecolumn}>
              <span>NOC Responsável:</span> {nocResponsavel}
            </td>

            <td className={style.tableicon} rowSpan="4">
              <p>
                <img
                  className={style.img}
                  src={View}
                  alt="imagem visualizar"
                  onClick={() => handleNavigateToPage(id)}
                />
              </p>
              {/* <p className={style.iconsbottom}>
                <img 
                  className={style.img}  
                  src={Edit} 
                  alt="imagem editar" 
                  onClick={() => handleNavigateToEditPage(id)}
                />
              </p> */}
              <p className={style.iconsbottom}>
                <img
                  className={style.img}
                  src={Delete}
                  alt="imagem excluir"
                  onClick={() => handleDeleteShift(id)}
                />
              </p>
            </td>
          </tr>

          <tr>
            <td className={style.tablecolumn}>
              <span>Nº do Chamado:</span> {nChamado}{" "}
            </td>
            <td className={style.tablecolumn}>
              <span>Tipo de Requisição:</span> {tipoRequisicao}
            </td>
            <td className={style.tablecolumn}>
              <span>Prioridade:</span> {prioridade}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
