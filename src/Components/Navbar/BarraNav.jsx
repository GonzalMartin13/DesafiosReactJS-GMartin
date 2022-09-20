import React from "react";
import { Link } from "react-router-dom";
import Logocarrito from "../LogoCarrito/Logocarrito";
import './navbar.css';


const BarraNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/index">ReactHouse</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <Link class="nav-link" >Cursos</Link>
                        <Link class="nav-link" >Carreras</Link>
                        <Link class="nav-link " >ReactBecas</Link>
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