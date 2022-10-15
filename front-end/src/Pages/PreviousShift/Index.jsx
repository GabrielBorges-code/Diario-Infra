// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'

import Input from "../../Components/Input/Index";
import Select from "../../Components/Select/Index";
import TextArea from "../../Components/TextArea/Index";

import Container from "../../Components/Container/Index";
import Button from "../../Components/Button/Index";

function PreviousShift() {

    // const navigate = useNavigate();
    const [diary, setDiary] = useState([]);

    const submit = (e) => {
        e.preventDefault();
        test();
       
        // alert("Teste");
    //    setDiary({...diary})
    //     console.log(diary);

    }

    function test() {
        setDiary([
            diary.shift

        ])
    }
    console.log(diary)
    // useEffect(() => {
    //     fetch("http://localhost:3001/api/diario-infra", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': "application/json",
    //         },
    //         body: JSON.stringify("???"),
    //     }).then((resp) => resp.json()).then((data) => {
    //         // navigate("/turnos-anteriores", { state: { message: "Turno Passdo com sucesso!" }})
    //     })

    // }, [])

    return(
        <Container>
            
            <h2>Passagem de turno</h2>

            <br/>

            <form onSubmit={submit} action="">
                <Select value={diary.shift} label="Turno" options={["Noturno", "Diurno"]}/>
                <Input value={diary.date_and_time_ticket} label="Data e Hora do CA" type="datetime-local" />
                <Input value={diary.num_ticket} label="Número do Chamado"/>
                <Select value={diary.requisition_type} label="Tipo de Requisição" options={["Chamado", "Atenção"]}/>
                <Select value={diary.responsible_NOC} label="NOC Respnsável" options={["João Gabriel", "Gabriel Borges", "Pablo Caldas", "Jonathan Bispo"]}/>
                <Input value={diary.priority} label="Prioridade"/>
                <Select value={diary.intermittent} label="Intermitências" options={["Sim", "Não"]}/>
                <Select value={diary.responsible_island} label="Ilha responsável" options={["Ilha Windos", "Ilha Linux", "Ilha Redes", "Ilha Banco de Dados", "Ilha Deploy Windows", "Ilha Deploy Linux", "Ilha Segurança"]}/>
                <Input value={diary.responsible_triggered} label="Responsável Acionado"/>
                <Input value={diary.activation_time} label="Hora do acionamento"/>
                <Select value={diary.out_of_office} label="Fora do Horário do Expediente" options={["Sim", "Não"]}/>
                <Input value={diary.status} label="Status"/>
                <Select value={diary.warning_email} label="E-mail de Aviso" options={["Sim", "Não"]}/>
                <Input value={diary.type_of_activation} label="Tipo de acionamento"/>

                <TextArea label="Observação" />
                
                <Button text="Enviar"/>

            </form>

            <br/><br/><br/><br/><br/>

        </Container>
    );
}

export default PreviousShift;
