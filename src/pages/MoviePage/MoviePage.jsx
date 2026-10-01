import React, { useEffect,useState } from 'react';
import "./MoviePage.css"
import { useParams } from 'react-router-dom';
import axios from 'axios';



const MoviePage = () => {

  const [movie, setMovie] = useState([]);
  const {id} = useParams();

  useEffect(() => {
  async function fetchMovies() {

    

    const { data } = await axios.get(
      `${process.env.REACT_APP_OMDB_API_URL}&i=${id}`,
    );

    setMovie(data);
  }

  fetchMovies();
  }, []);


  return (
    <div>
      <div className="moviePage">
        {movie && (
          <div className="moviepage__container" key={movie.imdbID}>
            <div className="moviepage__poster">
              {movie.Poster && movie.Poster !== "N/A" ? (
                <img src={movie.Poster} alt={movie.Title} className="moviePage__posterImage" />
              ) : (
                <p className="noPoster">No Poster Available</p> 
              )}
            </div>
            <div className="moviepage__details">
              <h2 className="moviePage__title">Movie Title: {movie.Title}</h2>
              <p className="moviePage__year"><b>Release Year: </b>{movie.Year}</p>
              <p className="moviePage__rated"><b>Rated: </b>{movie.Rated}</p>
              <p className="moviePage__released"><b>Release Date: </b>{movie.Released}</p>
              <p className="moviePage__runtime"><b>Runtime: </b>{movie.Runtime}</p>
              <p className="moviePage__genre"><b>Genre: </b>{movie.Genre}</p>
              <p className="moviePage__director"><b>Director: </b>{movie.Director}</p>
              <p className="moviePage__writer"><b>Writer: </b>{movie.Writer}</p>
              <p className="moviePage__actors"><b>Actors: </b>{movie.Actors}</p>
              <p className="moviePage__plot"><b>Plot: </b>{movie.Plot}</p>
              <p className="moviePage__language"><b>Language: </b>{movie.Language}</p>
              <p className="moviePage__country"><b>Country: </b>{movie.Country}</p>
              <p className="moviePage__awards"><b>Awards: </b>{movie.Awards}</p>
              <p className="moviePage__rating"><b>IMDb Rating: </b>{movie.imdbRating}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoviePage;