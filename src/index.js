
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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