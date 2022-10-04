import PreviousShift from "../Pages/PreviousShift/Index";
import ShiftChange from "../Pages/ShiftChange/Index";
import MainPage from "../Pages/MainPage/Index";
import Header from "../Components/Header/Index";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function Routers() {
  return (
    <>
      <BrowserRouter>
        
        <Header/>

        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/passagem-de-turno" element={<PreviousShift />} />
          <Route path="/turnos-anteriores" element={<ShiftChange />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
