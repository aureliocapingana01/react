import React from "react";

function Erro(props){
    return (
      <div className="App">
    
        <header className="App-header">
        <p>ERRO na Consulta</p>
        <p>{props.erroMessage} </p>
        </header>
        
      </div>
    );
}

export default Erro