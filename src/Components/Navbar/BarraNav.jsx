import React from "react";
import Logocarrito from "../LogoCarrito/Logocarrito";
import './navbar.css';


const BarraNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ReactHouse</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <a class="nav-link" href="#">Cursos</a>
                        <a class="nav-link" href="#">Carreras</a>
                        <a class="nav-link " href="#">ReactBecas</a>
                        </div>
                    </div>
                    <div class="justify-content-end">
                        <Logocarrito/>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default BarraNav; 