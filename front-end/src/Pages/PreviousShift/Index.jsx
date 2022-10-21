import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import Input from "../../Components/Input/Index";
import Select from "../../Components/Select/Index";
import TextArea from "../../Components/TextArea/Index";

import Container from "../../Components/Container/Index";
import Button from "../../Components/Button/Index";

function PreviousShift() {
  //   const [diary, setDiary] = useState([]);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch("http://localhost:3001/api/diario-infra", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate("/turnos-anteriores", {
          state: { message: "Turno criado com sucesso" },
        });
      });
  };

  return (
    <Container>
      <h2>Passagem de turno</h2>

      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          label="Turno"
          options={["Noturno", "Diurno"]}
          name="shift"
          control={control}
        />

        <Input
          label="Data e Hora do CA"
          type="datetime-local"
          name="date_and_time_ticket"
          control={control}
        />

        <Input
          label="Número do Chamado"
          type="number"
          name="num_ticket"
          control={control}
        />

        <Select
          label="Tipo de Requisição"
          options={["Chamado", "Incidente"]}
          name="requisition_type"
          control={control}
        />

        <Select
          label="NOC Responsável"
          options={[
            "João Gabriel",
            "Gabriel Borges",
            "Pablo Caldas",
            "Jonathan Bispo",
          ]}
          name="responsible_NOC"
          control={control}
        />

        <Input
          label="Prioridade"
          type="text"
          name="priority"
          control={control}
        />

        <Select
          label="Intermitências"
          options={["Sim", "Não"]}
          name="intermittent"
          control={control}
        />

        <Select
          label="Ilha responsável"
          options={[
            "Ilha Windos",
            "Ilha Linux",
            "Ilha Redes",
            "Ilha Banco de Dados",
            "Ilha Deploy Windows",
            "Ilha Deploy Linux",
            "Ilha Segurança",
          ]}
          name="responsible_island"
          control={control}
        />

        <Input
          label="Responsável Acionado"
          type="text"
          name="responsible_triggered"
          control={control}
        />

        <Input
          label="Hora do acionamento"
          type="time"
          name="activation_time"
          control={control}
        />
        <Select
          label="Fora do Horário do Expediente"
          options={["Sim", "Não"]}
          name="out_of_office"
          control={control}
        />

        <Input label="Status" type="text" name="status" control={control} />

        <Select
          label="E-mail de Aviso"
          options={["Sim", "Não"]}
          name="warning_email"
          control={control}
        />

        <Input
          label="Tipo de acionamento"
          type="text"
          name="type_of_activation"
          control={control}
        />

        <TextArea label="Observação" control={control} name="note" />

        <Button text="Enviar" />
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
    </Container>
  );
}

export default PreviousShift;
