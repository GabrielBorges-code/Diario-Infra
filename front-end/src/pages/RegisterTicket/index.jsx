import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import style from "./styles.module.css";

import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";

import Container from "../../components/Container";
import Button from "../../components/Button";

export default function RegisterTicket() {
  
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => {
    try {
      fetch("http://10.105.80.191:3001/api/diario-infra", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then((data) => {
          navigate("/chamados-anteriores", {
            state: { message: "Turno criado com sucesso" },
          });
        });
    } catch (error) {
      console.log(error);
      console.log(errors);
    }
  };

  return (
    <Container>
      <h1>Registro de Chamado</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          label="Turno"
          options={["Noturno", "Diurno"]}
          name="shift"
          control={control}
        />

        <Input
          label="Data e Hora do CA"
          mask="00/00/0000 00:00"
          placeholder="dd/mm/aaaa hh:mm"
          name="date_and_time_ticket"
          control={control}
        />

        <Input
          label="Número do Chamado"
          name="num_ticket"
          control={control}
          mask="000000"
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

        <Select
          label="Prioridade"
          options={["1 - Alta", "2 - Média", "3 - Baixa"]}
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
            "Ilha Windows",
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
          name="responsible_triggered"
          control={control}
        />

        <Input
          label="Hora do acionamento"
          mask="00:00"
          placeholder="hh:mm"
          name="activation_time"
          control={control}
        />
        <Select
          label="Fora do Horário do Expediente"
          options={["Sim", "Não"]}
          name="out_of_office"
          control={control}
        />

        <Select
          label="Status"
          options={["Aberto", "Designado", "Atendido", "Fechado"]}
          name="status"
          control={control}
        />

        <Select
          label="E-mail de Aviso"
          options={["Sim", "Não", "Não foi necessário"]}
          name="warning_email"
          control={control}
        />

        <Select
          label="Tipo de acionamento"
          options={["Ligação", "Teams", "WhatsApp", "Presencial"]}
          name="type_of_activation"
          control={control}
        />

        <TextArea label="Observação" control={control} name="note" />

        <div className={style.inline}>
          <Button text="Enviar" type="submit" />

        </div>
      </form>
    </Container>
  );
}
