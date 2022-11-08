import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Container from "../../components/Container";
import DetailedCardTicket from "../../components/DetailedCardTicket";
import Button from "../../components/Button";

import styles from "./styles.module.css";

export default function DetailedTicket() {
  const [database, setDatabase] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/diario-infra/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDatabase(data.result);
      })
      .catch((err) => console.log(err));
  }, [id]);

  
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
        .then((data) => {
          navigate("/chamados-anteriores", {
            state: { message: "Turno apagado com sucesso" },
          });
        })
        .catch((err) => console.log(err));
    }
  };

  // const handleNavigateToEditPage = (id) => {
  //   navigate(`/editar-chamado/${id}`)
  // }

  return (
    <Container>
      <h1>
        {database.requisition_type} {database.num_ticket}
      </h1>

      <DetailedCardTicket
        id={database.id}
        shift={database.shift}
        date_and_time_ticket={database.date_and_time_ticket}
        num_ticket={database.num_ticket}
        requisition_type={database.requisition_type}
        responsible_NOC={database.responsible_NOC}
        priority={database.priority}
        intermittent={database.intermittent}
        responsible_island={database.responsible_island}
        responsible_triggered={database.responsible_triggered}
        activation_time={database.activation_time}
        out_of_office={database.out_of_office}
        status={database.status}
        warning_email={database.warning_email}
        type_of_activation={database.type_of_activation}
        note={database.note}  
      /> 
  

      <div className={styles.inline}>
        {/* <Button 
          text="Editar" 
          type="button" 
          onClick={() => handleNavigateToEditPage(id)}
        /> */}
        <Button 
          text="Excluir" 
          type="button"
          onClick={() => handleDeleteShift(id)}
        />
      </div>
      
    </Container>
  );
}
