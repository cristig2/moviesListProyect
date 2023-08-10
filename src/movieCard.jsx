import styles from "./movieCard.module.css"

export function MovieCard({movie})
{
    const imageUrl = "http://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <img width="230px" height="345px" className={styles.movieImage} src={imageUrl} alt={movie.title}/>
            <div>{movie.title}</div>
        </li>
    );
}