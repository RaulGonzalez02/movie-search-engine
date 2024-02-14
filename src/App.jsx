import { useEffect, useState } from 'react'
import './App.css'
import ListOfMovies from './components/ListOfMovies'
import NoMovies from './components/NoMovies'
import {useGetMovies} from './services/hooks/useGetMovies'

function App() {
  /* const [movie, setMovies] = useState(null) */
  const [title, setTitle] = useState("")
  const [movies, getMovies] = useGetMovies(title);
 /*  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${YOUR KEY API}&s=${title}`).
      then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.Search)
        setMovies(responseJson.Search)
      })
  }, [title]) */

  //CON HOOK PERSONALIZADO, LLAMOSMOS AL HOOK PARA QUE NOS DESVUELVA LOS DATOS PARA PODER RENDERIZAR
  //const movies = useGetMovies(title)

const handlerSubmit=(event)=>{
  event.preventDefault();
  getMovies();
}

const handlerChange=(event)=>{
  setTitle(event.target.value)
}

  return (
    <div className='container'>
      <header className="header">
        <h1>Prueba Técnica OMDB</h1>
        <form onSubmit={handlerSubmit} action="" className="form">
          <input onChange={handlerChange} type="text" name="" placeholder='Skyrim, Far cry' className="form__input" />
          <button className="form__button">Enviar</button>
        </form>
      </header>
      <main className='main'>
        {movies ? <ListOfMovies movies={movies}> </ListOfMovies> : <NoMovies></NoMovies>}
      </main>
    </div>
  )
}

export default App
