import Container from "../../components/Container";
import CSV from "../../components/CSV"

export default function MainPage() {
  return (
    <Container>
      <h1>Página Principal</h1>
      <p>
        aqui pode ficar o detalhamento
      </p>

      <CSV title="Download CSV" filename="turnos.csv" />

    </Container>
  );
}
