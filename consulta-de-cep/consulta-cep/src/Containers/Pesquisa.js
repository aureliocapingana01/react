import React from "react";

function Pesuisa(props){
    const textoTopo = props.textoTopo

    return (
      <div className="App">
    
        <header className="App-header">
            {textoTopo}
        {/* <p>Qual CEP deseja pesquisar?</p> */}   
          <input/>
          <button>CONSULTAR</button>
        </header>
        
      </div>
    );
}

export default Pesuisa
