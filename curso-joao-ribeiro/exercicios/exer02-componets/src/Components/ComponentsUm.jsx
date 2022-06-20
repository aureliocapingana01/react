import React from "react";
// import './App.css';

function ComponentsUm(props){
    return(
        <div className="componentes">
           <p>Titulo: {props.titulo} </p>
           <p>Lorem ipsum dolor sit amet.</p>
           {props.children}
        </div>
    )
}
export default ComponentsUm