import Container from "../../components/Container";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea"

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";

import styles from "./styles.module.css";

// import CSV from "../../components/CSV";

export default function MainPage() {
  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      console.log(data);
      // fetch("http://localhost:3001/api/diario-infra", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then((resp) => resp.json())
      //   .then((data) => {
      //     navigate("/chamados-anteriores", {
      //       state: { message: "Turno criado com sucesso" },
      //     });
      //   });
    } catch (error) {
      console.log(error);
      console.log(errors);
    }
  };

  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  return (
    <Container>
      <h1>Passagem de turno</h1>
     
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Data do Turno"
          // type="datetime-local"
          mask="00/00/0000"
          placeholder="dd/mm/aaaa"
          name="date_and_time_shift"
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

        <h2>Check-list de todas as atividades a serem executadas durante os expedientes:</h2>

        <Checkbox label=" 01 - Ronda Física na Sala Core" name="activy_1" control={control} />
        <Checkbox label=" 02 - Preencher o documento de Passagem de Turno" name="activy_2" control={control} />
        <Checkbox label=" 03 - Triagem de chamados do grupo Ilha Monitoração" name="activy_3" control={control} />
        <Checkbox label=" 04 - Verificar inicidentes nas ferramentas e nos sistemas" name="activy_4" control={control} />
        <Checkbox label=" 05 - Atualizar evidências dos chamados abertos Links Embratel" name="activy_5" control={control} />

        <br/>

        <TextArea label="Avisos" control={control} name="note" />

        <div className={styles.inline}>
          <Button text="Enviar" type="submit" />

        </div>

        
      </form>

      {/* <CSV title="Download CSV" filename="turnos.csv" /> */}
    </Container>
  );
}
