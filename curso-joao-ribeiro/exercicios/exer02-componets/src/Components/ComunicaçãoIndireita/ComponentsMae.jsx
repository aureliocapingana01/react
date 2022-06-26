import React from "react";
import ComponentsFilha from "./ComponentsFilha";

function ComponentsMae(props) {

    function clicou(){
        console.log("Botão da filha clicado")
    }
    return (
        <div className="componentes">
            <p className="titulo">
                Mãe
            </p>
            <ComponentsFilha titulo="Componente Filha" click={clicou} />
        </div>
    )
}
export default ComponentsMae
