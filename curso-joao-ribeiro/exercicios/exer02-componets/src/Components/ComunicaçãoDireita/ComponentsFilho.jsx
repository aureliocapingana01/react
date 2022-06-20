import React from "react";

const ComponentsFilho = (props) =>{
    return(
        <div className="filho">
            <p className="titulo">Titulo:{props.titulo} </p>
            <p>Cargo:{props.cargo}  = {props.children} </p>
        </div>
    )
}
export default ComponentsFilho