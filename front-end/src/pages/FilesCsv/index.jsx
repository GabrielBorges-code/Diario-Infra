import React, { useEffect, useState } from "react";

import Container from "../../components/Container";
import CSV from "../../components/CSV";

export default function FilesCsv() {

  const [databaseShift, setDatabaseShift] = useState([]);
  const [databaseTicket, setDatabaseTicket] = useState([]);

  useEffect(() => {
    fetch("http://10.105.80.191:3001/api/relatorio-turnos/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDatabaseShift(data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://10.105.80.191:3001/api/relatorio-chamados/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setDatabaseTicket(data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <Container>
      <h1>Gerar Relatórios</h1>
      
      <p>Gerar Relatório da passsgem de turno</p>

      <br/><br/>

      {databaseShift.length > 0 && (
        <CSV table="shift" title="Turnos" filename="turnos.csv" />

      )}

      {databaseShift.length === 0 && <p>Não há itens para ser exibido</p>}

      <br/><br/><br/><br/>
      
      <p>Gerar Relatório dos chamados abertos</p>

      <br/><br/>

      {databaseTicket.length > 0 && (
        <CSV table="ticket" title="Chamados" filename="chamados.csv" />

      )}

      {databaseTicket.length === 0 && <p>Não há itens para ser exibido</p>}
      
    </Container>
  );
}
