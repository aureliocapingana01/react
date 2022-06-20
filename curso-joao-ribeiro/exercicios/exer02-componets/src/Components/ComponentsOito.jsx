import React from "react";
import CondicaoIf from "./CondicaoIf";

const ComponentsOito = (props) =>{
    return(
        <div className="componentes">
            <p className="titulo">Titulo :{props.titulo}
             </p>
            
            <p>Nome:{props.valor} </p>

            <CondicaoIf condicao={props.valor == "Aurelio"}  >
                
                <p>Verdadeira, È o meu nome</p>
            </CondicaoIf>
            <CondicaoIf condicao={props.valor != "Aurelio"} >
                <p>Falso, desconheço este nome</p>
            </CondicaoIf>
        </div>
    )
}
export default ComponentsOito