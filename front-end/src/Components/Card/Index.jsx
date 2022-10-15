import style from "./style.module.css";
import Edit from "../../assets/icons/edit.png";

import Delete from "../../assets/icons/delete.png";

import View  from "../../assets/icons/view.png";

// function List({
//     id,     
//     turno, 
//     dataEHora, 
//     nChamado, 
//     tipoRequisicao, 
//     nocResponsavel, 
//     prioridade, 
//     intermitencia, 
//     ilhaResponsavel, 
//     responsavelAcionado, 
//     horaAcionamento, 
//     foraDoExpediente, 
//     status, 
//     emailDeAviso, 
//     tipoDeAcionamento, 
//     observacao
// }) {
function List({
    turno, 
    dataEHora, 
    nChamado, 
    tipoRequisicao, 
    nocResponsavel, 
    prioridade, 
    
}) {
    return(
        <div className={style.card}>
            <table className={style.table}>
                <tr>
                    <td className={style.tablecolumn}><span>Turno:</span> {turno}</td>
                    <td className={style.tablecolumn}><span>Data e Hora:</span> {dataEHora}</td>
                    <td className={style.tablecolumn}><span>NOC Responsável:</span> {nocResponsavel}</td>
                  
                    <td className={style.tableicon} rowSpan="4">
                        <p><img className={style.img} src={View} alt="" /></p>
                        <p><img className={style.img} src={Edit} alt="" /></p>
                        <p><img className={style.img} src={Delete} alt="" /></p>

                    </td>
                </tr> 

                <tr>
                    <td className={style.tablecolumn}><span>Nº do Chamado:</span> {nChamado} </td>
                    <td className={style.tablecolumn}><span>Tipo de Requisição:</span> {tipoRequisicao}</td>
                    <td className={style.tablecolumn}><span>Prioridade:</span> {prioridade}</td>
                    
                </tr>
            
            </table>
        </div>
        
    );
}

export default List;
