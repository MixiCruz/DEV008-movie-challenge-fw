import { useEffect } from 'react';
import './App.css'
import {  MyTitle } from './Pages/welcome';
// import { useFetch } from './UseFetch';

function App() {
  useEffect(()=>{
   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1559617d")
  .then((res) => {return res.json()})
  .then((data) => console.log(data))
   // .catch((error) => console.log(error))
  },[])

  return (
    <>
      <div>
        <MyTitle />
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App
