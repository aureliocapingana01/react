import React from "react";
import ComponentsFilho from "./ComponentsFilho";

const ComponentsPai = (props) =>{
    return(
        <div className="componentes">
            <p className="titulo">Titulo:{props.titulo} </p>
            <p>PAi</p>
            <ComponentsFilho className="titulo" titulo = "Componente Filho" cargo="Dev"> Aurélio Capingana 
            </ComponentsFilho>
            <ComponentsFilho className="titulo" titulo = "Componente Filho" cargo="Psicologa"> Ana Capingana 
            </ComponentsFilho>
            <ComponentsFilho className="titulo" titulo = "Componente Filho" cargo="Financeiro"> Afonso Castro 
            </ComponentsFilho>
        </div>
    )
}
export default ComponentsPai