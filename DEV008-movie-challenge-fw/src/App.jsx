import { useEffect, useState } from 'react';
import './App.css'
import { MovieBox } from './Components/MovieBox';
import { Welcome } from './Components/NavBar';

const  API_URL= 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=0407a2ec62d393a723f0a43cd181d544'
function App() {

  const [movies, setMovies] = useState([]);

  useEffect(()=>{
   fetch(API_URL)
  .then((res) =>  res.json())
  .then((data) => {console.log(data)
    setMovies(data.results);
  })
  },[])

  return (
    <>
  
      <div className='container'>
        {movies.map((movieReq)=> <MovieBox key={movieReq.id}{...movieReq} /> )}
      </div>
  
    </>
  )
}

export default App
