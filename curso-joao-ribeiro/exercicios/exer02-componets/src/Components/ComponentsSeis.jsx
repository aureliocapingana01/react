import React from "react";

const ComponentsSeis = (props)=>{
    return(
        <div className="componentes">
            <p className="titulo"> Titulo :{props.titulo} </p>
            {
            props.valor ? 
            <p>Verdadeiro</p>
             : 
             <p>Falso</p> 
            }
        </div>
    )
}
export default ComponentsSeis