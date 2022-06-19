import React from "react";
import './Commits.css'

function Commits(props){
    function Maiusculas(texto) {
        return texto.toUpperCase()
    }
    return(
        <div>

           <section className="caixa">
           <p className="titulo"> {Maiusculas(props.title)} </p>
           <p className="paragrafo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis aperiam aspernatur impedit ab minus?</p>
           <p className="autor">Autor : Aurélio Capingana</p>
        </section>
          
        </div>
    )
}
export default Commits