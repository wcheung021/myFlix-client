import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    { id: 1, 
      Title: "Saving Private Ryan", 
      ImageUrl: "https://m.media-amazon.com/images/I/41Sl8QTPqGL._SX300_SY300_QL70_FMwebp_.jpg",
      Author: "Steven Spielberg",
      Genre: ["Action, ","Drama"]
    },{ 
      id: 2, 
      Title: "Gladiator",
      ImageUrl: "https://m.media-amazon.com/images/I/51fQWOTDz9L._SX300_SY300_QL70_FMwebp_.jpg",
      Author: "Ridley Scott",
      Genre: "Drama"
    },{ 
      id: 3, 
      Title: "Top Gun",
      ImageUrl: "https://m.media-amazon.com/images/I/41pGXsy5m3L._SX342_.jpg",
      Author: "Tony Scott",
      Genre: "Action"
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

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