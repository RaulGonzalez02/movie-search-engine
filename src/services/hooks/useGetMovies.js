import { useEffect, useState } from "react"

export const useGetMovies = (title) => {
  const [movies, setMovies] = useState(null)
  /* useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${YOUR KEY API}&s=${title}`).
      then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.Search)
        setMovies(responseJson.Search)
      })
  }, [title]) */
  
  const getMovies=()=>{
    fetch(`http://www.omdbapi.com/?apikey=${YOUR_KEY_API}&s=${title}`).
      then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.Search)
        setMovies(responseJson.Search)
      })
  }

  return [movies, getMovies]
}
