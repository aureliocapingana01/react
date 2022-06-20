import React from "react";
import "../App.css"
import clientes from "../Dados/dados_clientes"

const ComponentsCinco = (props) => {

    function cliente(){
        return clientes.map(cliente =>{
            return <li key={cliente.id_cliente}>
                Nome:{cliente.nome} | 
                Email:{cliente.email}
                </li>
        })
    }

    return(
        <div className="componentes">
        <p className="titulo"> Titulo:{props.titulo} </p>
           <ul className="lista">
              {cliente()}
           </ul>
        </div>
    )
}
export default ComponentsCinco