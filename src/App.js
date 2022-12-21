import './App.css';
import Header from "./components/Header"
import MovieScreen from './components/MovieScreen';
import React, { useState, useEffect } from "react";
import axios from "axios"


function App() {
  const [movieList, setMovieList] = useState([])
  const [watchlist, setWatchList] = useState([])
  const [page, setPage] = useState(1)


  const getData = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    .then((res) => {
      setMovieList(res.data.results)
      
    })
  }
  useEffect(() => {
    getData()
  }, [page])


  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen 
        list = {watchlist}
        page = {page}
        setPage = {setPage}
        movieList = {movieList}/>
      </main>
    </div>
  );
}





export default App;

