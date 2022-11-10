import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import Container from "../../components/Container";
import DetailedCardShift from "../../components/DetailedCardShift";
import Button from "../../components/Button";

import styles from "./styles.module.css";

export default function DetailedShift() {
  const [database, setDatabase] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://10.105.80.191:3001/api/passagem-de-turno/${id}`, {
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
      fetch(`http://10.105.80.191:3001/api/passagem-de-turno/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          navigate("/turnos-anteriores", {
            state: { message: "Turno apagado com sucesso" },
          });
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <h1>
        Detalhes do Turno - {database.date_and_time_shift} - {database.shift}
      </h1>

      <DetailedCardShift
        date_and_time_shift={database.date_and_time_shift}
        shift={database.shift}
        responsible_NOC={database.responsible_NOC}
        activy_1={database.activy_1}
        activy_2={database.activy_2}
        activy_3={database.activy_3}
        activy_4={database.activy_4}
        activy_5={database.activy_5}
        note={database.note}
      /> 
  

      <div className={styles.inline}>
        <Button 
          text="Excluir" 
          type="button"
          onClick={() => handleDeleteShift(id)}
        />
      </div>
      
    </Container>
  );
}
