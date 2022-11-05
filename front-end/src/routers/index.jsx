import PreviousTicket from "../pages/PreviousTicket";
import RegisterTicket from "../pages/RegisterTicket";
import DetailedTicket from "../pages/DetailedTicket"
import MainPage from "../pages/MainPage";
import EditTicket from "../pages/EditTicket";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Routers() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/chamado-detalhado/:id" element={<DetailedTicket/>}/>
          <Route path="/editar-chamado/:id" element={<EditTicket/>}/>
          <Route path="/registro-de-chamados" element={<RegisterTicket/>}/>
          <Route path="/chamados-anteriores" element={<PreviousTicket/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
