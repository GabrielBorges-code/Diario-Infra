import { useState, useEffect } from "react";

import Container from "../../Components/Container/Index";
import Card from "../../Components/Card/Index";

function ShiftChange() {

  const [database, setDatabase] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/diario-infra", {
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

  // console.log(database);

  return (
    <Container>
      <h1>Turnos Anteriores</h1>

      {database.length > 0 &&
        database
          .slice(0)
          .reverse()
          .map((data) => (
            <Card
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

export default ShiftChange;
