import Container from "../../Components/Container/Index";
import Card from "../../Components/Card/Index";

function ShiftChange() {

    // exemplo de bd, no back isso vai virar uma query
    const database = [
        {
            id: 1,
            turno: "Noturno",
            data_e_hora: "16/06/202022 16:30",
            n_chamado: 987456,
            tipo_de_requisicao: "solicitacao",
            noc_reponsavel: "João Gabriel",
            prioridade: "Média",
            intermitencia: "Sim",
            ilha_responsavel: "Ilha Deploy",
            resposavel_acionado: "Anderson DASFd",
            hora_acionamento: "07:35",
            fora_do_expediente: "Sim",
            status: "Não Atendido",
            email_de_aviso: "Sim",
            tipo_de_acionamento: "Teams",
            observacao: "lfjçlasd ldskfj çasldkfç lsakdfjçlsad fsdjf sadlçfj sadççfjsadçfljsadçlf sadçlfjsadf sd"
    
        },
        {
            id: 2,
            turno: "Noturno",
            data_e_hora: "16/06/202022 16:30",
            n_chamado: 432987,
            tipo_de_requisicao: "solicitacao",
            noc_reponsavel: "Gabriel Borges",
            prioridade: "Média",
            intermitencia: "Sim",
            ilha_responsavel: "Ilha Linux",
            resposavel_acionado: "José Wellison",
            hora_acionamento: "16:45",
            fora_do_expediente: "Não",
            status: "Atendido",
            email_de_aviso: "Não",
            tipo_de_acionamento: "Teams",
            observacao: "lfjçlasd ldskfj çasldkfç lsakdfjçlsad fsdjf sadlçfj sadççfjsadçfljsadçlf sadçlfjsadf sd"
    
        },
        {
            id: 2,
            turno: "Diurno",
            data_e_hora: "19/07/2022 12:30",
            n_chamado: 432987,
            tipo_de_requisicao: "Incidente",
            noc_reponsavel: "Pablo",
            prioridade: "Alta",
            intermitencia: "Sim",
            ilha_responsavel: "Ilha Banco de Dados",
            resposavel_acionado: "Dihemy",
            hora_acionamento: "14:10",
            fora_do_expediente: "Sim",
            status: "Atendido",
            email_de_aviso: "Sim",
            tipo_de_acionamento: "WhatsApp",
            observacao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iste facere quibusdam asperiores possimus blanditiis quasi dolorem officiis, veritatis sed beatae inventore ducimus iusto mollitia. Repellendus, unde sit. Expedita, soluta!"
    
        },

    ];
    
    return(
        <Container>
            <h1>Turnos Anteriores</h1>
            
            {database.length > 0 &&
            database.map((data) => (
                <Card 
                    id={data.id} 
                    turno={data.turno}
                    dataEHora={data.data_e_hora}
                    nChamado={data.n_chamado}
                    tipoRequisicao={data.tipo_de_requisicao}
                    nocResponsavel={data.noc_reponsavel}
                    prioridade={data.prioridade}
                    intermitencia={data.intermitencia}
                    ilhaResponsavel={data.ilha_responsavel}
                    responsavelAcionado={data.resposavel_acionado}
                    horaAcionamento={data.hora_acionamento}
                    foraDoExpediente={data.fora_do_expediente}
                    status={data.status}
                    emailDeAviso={data.email_de_aviso}
                    tipoDeAcionamento={data.tipo_de_acionamento}
                    observacao={data.observacao}
                />
            ))}

            {database.length === 0  && <p>Não há itens para ser exibido</p>}


        </Container>
    );
}

export default ShiftChange;
