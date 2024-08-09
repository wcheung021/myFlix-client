import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://movies-app-e6416bf1d095.herokuapp.com/movies");
  }, []);
  

  if (movies.length === 0) {
    return <div>Movies list is empty</div>
  }
    return (
      <div>
        {movies.map((movie)=> (
          <MovieCard 
          key={movie.id} 
          movie={movie} 
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
//pass function as a prop
          }}
            />
//pass data to a child component
        ))}
      </div>
    );
  };