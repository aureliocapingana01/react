import React from "react";
import ComponentsQuatro from "./ComponentsQuatro";

export default props =>
  <div className="componentes">
    <p>Titulo : {props.titulo} </p>
    <ComponentsQuatro/>
    <ComponentsQuatro/>
    <ComponentsQuatro/>
  </div>