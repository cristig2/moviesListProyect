import { MovieCard } from "./movieCard";
import movies from "./movies.json"
import styles from "./moviesGrid.module.css";

export function MoviesGrid() {
    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => (
               <MovieCard key={movie.id} movie={movie} />
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
/*Se ha cambiado li por el nombre del componente MovieCard y su atributo
movie*/