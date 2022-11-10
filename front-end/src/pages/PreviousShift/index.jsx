import { useState, useEffect } from "react";

import Container from "../../components/Container";
import CardShift from "../../components/CardShift";

export default function PreviousShift() {
  const [database, setDatabase] = useState([]);

  useEffect(() => {
    fetch("http://10.105.80.191:3001/api/passagem-de-turno", {
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
      <h1>Turnos Anteriores</h1>

      {database.length > 0 &&
        database
          .slice(0)
          .reverse()
          .map((data) => (
          <CardShift
            key={data.id}
            id={data.id} 
            shift={data.shift}
            responsible_NOC={data.responsible_NOC} 
            date_and_time_shift={data.date_and_time_shift} 
            activy_1={data.activy_1} 
            activy_2={data.activy_2} 
            activy_3={data.activy_3} 
            activy_4={data.activy_4} 
            activy_5={data.activy_5} 
            note={data.note} 
            
          />
          ))}

      {database.length === 0 && <p>Não há itens para ser exibido</p>}
   
    </Container>
  );
}
