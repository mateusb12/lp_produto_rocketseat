import React from 'react';
import './Navbar.css';
import Button from "../Button"; // Assuming the CSS is saved in Navbar.css

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand paytone-style">
                Zingen
            </div>
            <div className="nav-links inter-style">
                <a href="#conheca-o-app">Conheça o app</a>
                <a href="#funcionalidades">Funcionalidades</a>
                <a href="#planos-e-precos">Planos e preços</a>
                {<Button className="inter-style" label="Baixar agora" type="primary" />}
            </div>
        </nav>
    );
};

export default Navbar;