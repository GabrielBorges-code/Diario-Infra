import React, { useEffect, useState } from "react";
import CsvDownload from "react-json-to-csv";

import styles from "./styles.module.css";

export default function CSV({ title, filename, table }) {

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
    <>
    {table === "shift" ? (
        <CsvDownload className={styles.button} data={databaseShift} filename={filename}>
          {title}
        </CsvDownload>
    ) : (
      <CsvDownload className={styles.button} data={databaseTicket} filename={filename}>
        {title}
      </CsvDownload>
    )}
    </>
  );
}
