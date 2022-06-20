import React from "react";

const ComponentsNove = (props) =>{
    const estilo = {
        color: "red",
        padding: "10px",
        backgroundColor: "white"

    }
    return (
        <div className="componentes">
            <p className="titulo">Titulo :{props.titulo}</p>
            <p style={estilo} >Texto do Paragrsfo</p>
        </div>
    )
}
export default ComponentsNove