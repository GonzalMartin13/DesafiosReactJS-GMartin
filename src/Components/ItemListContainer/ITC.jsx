import React, {Component} from "react";
import "../ItemListContainer/ITC.css";
import LogoRH from "../../Assets/logo192.png"

class ITC extends Component {
    render () {
        return (
            <div class="FondoMain text-center justify-content-center">
                <img src={LogoRH} alt="LogoReactHouse" />
                <h1>Bienvenido a ReactHouse</h1>
                <p>Lugar donde vas a llevar tus conocimiento al proximo nivel</p>
            </div>
        )
    }
}

export default ITC;
