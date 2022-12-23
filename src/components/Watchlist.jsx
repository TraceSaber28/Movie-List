import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({list, removeMovie}) => {
    const movieDislpay = list.map((movie, index) => {
        return(
            <MovieCard movie = {movie}
            list = {list} 
            removeMovie = {removeMovie}/>
        )
    })
    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDislpay}
            </div>
        </div>
    )
}

export default Watchlist