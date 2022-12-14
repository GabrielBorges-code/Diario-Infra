import { useState, useEffect } from "react";

import Container from "../../components/Container";
import Card from "../../components/Card";

export default function PreviousTicket() {
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    fetch("http://10.105.80.191:3001/api/diario-infra", {
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
  }, [database]);

  return (
    <Container>
      <h1>Chamados Anteriores</h1>

      {database.length > 0 &&
        database
          .slice(0)
          .reverse()
          .map((data) => (
            <Card
              key={data.id}
              id={data.id}
              turno={data.shift}
              dataEHora={data.date_and_time_ticket}
              nocResponsavel={data.responsible_NOC}
              nChamado={data.num_ticket}
              tipoRequisicao={data.requisition_type}
              prioridade={data.priority}
            />
          ))}

      {database.length === 0 && <p>Não há itens para ser exibido</p>}
    </Container>
  );
}
