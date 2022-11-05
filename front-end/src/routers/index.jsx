import PreviousShift from "../pages/PreviousShift";
import ShiftChange from "../pages/ShiftChange";
import DetailedShift from "../pages/DetailedShift"
import MainPage from "../pages/MainPage";
import EditShiftChange from "../pages/EditShiftChange";

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
          <Route path="/chamado-detalhado/:id" element={<DetailedShift/>}/>
          <Route path="/editar-chamado/:id" element={<EditShiftChange/>}/>
          <Route path="/registro-de-chamados" element={<ShiftChange/>}/>
          <Route path="/chamados-anteriores" element={<PreviousShift/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
