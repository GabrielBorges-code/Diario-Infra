import React from 'react';
import Container from '../../components/Container';
import CSV from "../../components/CSV";

import styles from './styles.module.css';

export default function FilesCsv() {
  return (
    <Container>
        <h1>Gerar arquivos CSV</h1>
        <div className="inline">
            <CSV title="Download CSV" filename="turnos.csv" />
            <CSV title="Download CSV" filename="turnos.csv" />

        </div>
    </Container>
  );
}
