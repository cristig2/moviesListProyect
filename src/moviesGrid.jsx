import movies from "./movies.json"

export function MoviesGrid() {
    return (
        <ul>
            {movies.map((movie) => (
               <li key={movie.id}>{movie.title}</li>
            ))}
        </ul>
    );
}
/*map es una funcion que tienen todos los arrays, a partir del objeto 
lo recorre uno a uno para usarlo*/
/*Es este caso lo que develve es dentro del objeto de movie un array
que recorre todo los titulos y los pasa dentro de una lista*/
/*Siempre que tengamos un listado debemos ponerle una key que sea unica
para dinamizarla y pasarle un atributo cambiamos las comillas por las 
llaves y dentro la expresion de JS el objeto .id ejemplo: movie.id*/