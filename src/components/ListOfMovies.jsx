/* eslint-disable react/prop-types */
import Movies from "./Movies";

export default function ListOfMovies({ movies }) {
  return (
    <>
      {movies.map(movie =>
        <Movies key={movie.added} movie={movie}></Movies>
      )}
    </>
  )
}
