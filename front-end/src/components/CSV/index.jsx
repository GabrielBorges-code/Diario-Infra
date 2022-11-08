import React, { useEffect, useState } from "react";
import CsvDownload from "react-json-to-csv";

import style from "./style.module.css";

export default function CSV({ title, filename }) {

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
  }, []);

  return (
      <CsvDownload className={style.button} data={database} filename={filename}>
        {title}
      </CsvDownload>
  );
}
