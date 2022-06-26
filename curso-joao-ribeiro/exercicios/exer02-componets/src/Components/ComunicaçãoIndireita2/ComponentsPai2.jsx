import React from "react";
import ComponentsFilho2 from "./ComponentsFilho2";

const ComponentsPai2 = (props) =>{

    function executar(valor){
        alert(valor)
    }
    return (
        <div className="componentes">
            <p className="titulo">
               Titulo:{props.titulo}
            </p>
            <ComponentsFilho2 titulo="Componente Filho2" funcao={executar} />
        </div>
    )
}
export default ComponentsPai2