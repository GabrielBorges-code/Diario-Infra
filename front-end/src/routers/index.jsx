import PreviousShift from "../pages/PreviousShift";
import ShiftChange from "../pages/ShiftChange";
import MainPage from "../pages/MainPage";
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
          <Route path="/passagem-de-turno" element={<PreviousShift />} />
          <Route path="/turnos-anteriores" element={<ShiftChange />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
