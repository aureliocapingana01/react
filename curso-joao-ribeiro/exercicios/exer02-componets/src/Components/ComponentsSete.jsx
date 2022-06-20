import React from "react";


 const ComponentsSete = (props) => {

    function condicao(){
        switch (props.valor) {
            case "Aurelio":
                return 'È o meu nome'.toUpperCase()
                break;
            case "Ana":
                return 'È a minha irmã'.toUpperCase()
                break;
            default:
                return <p>Desconheço este nome </p>
                break;
        }


        // if(props.valor >= 10){
        //     return <p> <strong>O valor e maior ou igual a 10 </strong></p>
        // }
        // else{
        //     return <p><strong>O valor e menor a 10</strong></p>
        // }
    }
    return (

    <div className="componentes">
        <p className="titulo"> Titulo : {props.titulo} </p>
        {condicao()}
    </div>
    )
}
export default ComponentsSete