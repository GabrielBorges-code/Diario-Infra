import { BrowserRouter, Route, Routes } from "react-router-dom";

import PreviousTicket from "../pages/PreviousTicket";
import RegisterTicket from "../pages/RegisterTicket";
import DetailedTicket from "../pages/DetailedTicket"
// import EditTicket from "../pages/EditTicket";

import DetailedShift from "../pages/DetailedShift"
import PreviousShift from "../pages/PreviousShift";
import RegisterShift from "../pages/RegisterShift";

import NoPage from "../pages/NoPage";
import FilesCsv from "../pages/FilesCsv";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Routers() {
  return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<RegisterShift />} />
          <Route path="/turnos-anteriores" element={<PreviousShift/>}/>
          <Route path="/turno-detalhado/:id" element={<DetailedShift/>}/>
          
          <Route path="/chamado-detalhado/:id" element={<DetailedTicket/>}/>
          <Route path="/registro-de-chamados" element={<RegisterTicket/>}/>
          <Route path="/chamados-anteriores" element={<PreviousTicket/>}/>
          {/* <Route path="/editar-chamado/:id" element={<EditTicket/>}/> */}

          <Route path="/gerar-relatorios" element={<FilesCsv/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
  );
}
