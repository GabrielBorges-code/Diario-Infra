import React from 'react';
import {BrowserRouter, Link } from "react-router-dom";

function Header() {
    return(
        <nav>
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/passagem-de-turno">Passagem de turno</Link>
                <Link to="/turnos-anteriores">Turnos Anteriores</Link>
            </BrowserRouter>
        </nav>
    );
}

export default Header;