import { BrowserRouter, Route, Routes } from "react-router-dom";

import PreviousTicket from "../pages/PreviousTicket";
import RegisterTicket from "../pages/RegisterTicket";
import DetailedTicket from "../pages/DetailedTicket"
import EditTicket from "../pages/EditTicket";

import PreviousShift from "../pages/PreviousShift";
import RegisterShift from "../pages/RegisterShift";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Routers() {
  return (
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<RegisterShift />} />
          <Route path="/turnos-anteriores" element={<PreviousShift/>}/>

          <Route path="/chamado-detalhado/:id" element={<DetailedTicket/>}/>
          <Route path="/editar-chamado/:id" element={<EditTicket/>}/>
          <Route path="/registro-de-chamados" element={<RegisterTicket/>}/>
          <Route path="/chamados-anteriores" element={<PreviousTicket/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
  );
}
