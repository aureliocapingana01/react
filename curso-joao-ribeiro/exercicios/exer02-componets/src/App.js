import React from "react";
import ComponentsUm from "./Components/ComponentsUm";
import ComponentsDois from "./Components/ComponentsDois";
import ComponentsTres from "./Components/ComponentsTres";
import ComponentsCinco from "./Components/ComponentsCinco";
import ComponentsSeis from "./Components/ComponentsSeis";
import ComponentsSete from "./Components/ComponentsSete";
import ComponentsOito from "./Components/ComponentsOito";
import ComponentsNove from "./Components/ComponentsNove";
import ComponentsPai from "./Components/ComunicaçãoDireita/ComponentsPai";
import ComponentsMae from "./Components/ComunicaçãoIndireita/ComponentsMae";
import ComponentsPai2 from "./Components/ComunicaçãoIndireita2/ComponentsPai2";
import './App.css'

function App() {
  return (

    <div className="App">
      <h1>Aplicação React</h1>
      <ComponentsUm titulo="Componente um">
        <ol className="lista">
          <li>2023</li>
          <li>Voltar para Jeová</li>
          <li>Ganha na Mega-Sena</li>
          <li>Casar e Viajar</li>
          <li>Ser feliz com Jeová e com o amor da vida a dois</li>
        </ol>
      </ComponentsUm>
      <ComponentsDois/>
      <ComponentsTres titulo="Array Function simplificado" />

      <ComponentsCinco titulo="Componente Cinco" />

      <ComponentsSeis titulo="Componente Seis - Condição 1" valor={0} />

      <ComponentsSete titulo="Componente Sete - Condição 2" valor="Ana" />

      <ComponentsOito titulo=" Componente oito - Condição 3" valor="Aurelio" />

      <ComponentsNove titulo="Componente Nove - Style Inline" />

      <ComponentsPai titulo="Comunicação Direita - Pai"/>

      <ComponentsMae  titulo="Comunicação Indireita - Pai"/>

      <ComponentsPai2 titulo="Comunicação Indireita - Pai2" />

    </div>

  );
}


export default App;
