
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from "./App";

/*El nombre se crea con la primera letra en mayuscula para diferenciar
de los elementos de HTML predeterminados.*/

/*Para introducir contenido de forma dinamica usaremos JS. En react 
se usan doble llaves{} para pasar las expresiones de JS como parametros*/

/*Los parametros o  props que van entre llaves{} pasan a ser propiedades 
de un objeto, con lo cual esos componentes se podrian usar de forma 
mas dinamica, pasando diferentes componentes, con diferentes parametros
y reutilizarlos tantas veces como se necesiten*/

ReactDOM.render(
  <App />,
  document.getElementById('root'));