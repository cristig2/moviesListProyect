
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*El nombre se crea con la primera letra en mayuscula para diferenciar
de los elementos de HTML predeterminados.*/

/*Para introducir contenido de forma dinamica usaremos JS. En react 
se usan doble llaves{} para pasar las expresiones de JS como parametros*/

/*Los parametros o  props que van entre llaves{} pasan a ser propiedades 
de un objeto, con lo cual esos componentes se podrian usar de forma 
mas dinamica, pasando diferentes componentes, con diferentes parametros
y reutilizarlos tantas veces como se necesiten*/

//Hay varias formas de destructurar el codigo para hacerlo mas simple:

/*function Componente(props)
{
  return (
    <div>
      <h1>{props.titulo}</h1>
      <div>{props.contenido}</div>
    </div>
  );
}*/

/*function Componente(props)
{
  const titulo = props.titulo;
  const contenido = props.contenido;
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
    </div>
  );
}*/

/*function Componente(props)
{
  //const titulo = props.titulo;
  //const contenido = props.contenido;
  //Seria igual a la siguiente linea
  const {titulo, contenido} = props;
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
    </div>
  );
}*/

function Componente({titulo, contenido}) 
{
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{contenido}</div>
    </div>
  );
}

ReactDOM.render(<Componente titulo="Title" contenido="Synopsis of the movie" />, document.getElementById('root'));