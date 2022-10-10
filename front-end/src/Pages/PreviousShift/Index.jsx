import Input from "../../Components/Input/Index";
import Select from "../../Components/Select/Index";
import TextArea from "../../Components/TextArea/Index";

import Container from "../../Components/Container/Index";
import Button from "../../Components/Button/Index";

function PreviousShift() {
    return(
        <Container>
            
            <h2>Passagem de turno</h2>

            <br/>

            <Select label="Turno" options={["Noturno", "Diurno"]}/>
            <Input label="Data e Hora do CA" type="datetime-local" />
            <Input label="Número do Chamado"/>
            <Input label="Tipo de Requisição"/>
            <Select label="NOC Respnsável" options={["João Gabriel", "Gabriel Borges", "Pablo Caldas", "Jonathan Bispo"]}/>
            <Select label="Tipo de Requisição" options={["Chamado", "Atenção"]}/>
            <Input label="Prioridade"/>
            <Select label="Intermitências" options={["Sim", "Não"]}/>
            <Select label="Ilha responsável" options={["Ilha Windos", "Ilha Linux", "Ilha Redes", "Ilha Banco de Dados", "Ilha Deploy Windows", "Ilha Deploy Linux", "Ilha Segurança"]}/>
            <Select label="Intermitências" options={["Sim", "Não"]}/>
            <Input label="Hora do acionamento"/>
            <Select label="Intermitências" options={["Sim", "Não"]}/>
            <Input label="Status"/>
            <Select label="Intermitências" options={["Sim", "Não"]}/>
            <Input label="Tipo de acionamento"/>

            <TextArea label="Observação (textarea)" />
            
            <Button text="Enviar"/>

            <br/><br/><br/><br/><br/>

        </Container>
    );
}

export default PreviousShift;
