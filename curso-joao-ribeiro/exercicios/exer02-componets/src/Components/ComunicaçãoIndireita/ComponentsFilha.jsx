import React from "react";

function ComponentsFilha(props) {
    return (
        <div className="componentes filha">
            <p className="titulo">
                {props.titulo}
            </p>
            <button onClick={props.click}>Clicar</button>
        </div>
    )
}
export default ComponentsFilha