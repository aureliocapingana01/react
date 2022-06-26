import React from "react";

const ComponentsFilho2 = (props) =>{
    return (
        <div className="filho">
            <p className="titulo">
            Titulo: {props.titulo}
            </p>
            <button onClick={() =>{
                props.funcao('Aurelio Capingana')
            } } > Executar </button>
        </div>
    )
}
export default ComponentsFilho2