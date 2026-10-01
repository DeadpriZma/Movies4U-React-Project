import React from "react";
import "./Movies.css";

import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Movies = () => {

  const [movieList, setMovieList] = useState([]);
  const [filmName, setFilmName] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(
        `${process.env.REACT_APP_OMDB_API_URL}&s=batman`,
      );

      const { Search } = data;
      setMovieList(Search);
    }

    fetchMovies();
  }, []);

  function filterMovies(event) {
    const sort = event.target.value;

    const sortedMovies = [...movieList];

    if (sort === "AZ") {
      sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    }

    if (sort === "ZA") {
      sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    if (sort === "OldNew") {
      sortedMovies.sort((a, b) => Number(a.Year) - Number(b.Year));
    }

    if (sort === "NewOld") {
      sortedMovies.sort((a, b) => Number(b.Year) - Number(a.Year));
    }

    setMovieList(sortedMovies);
  }

  function onSearch() {
    async function fetchPosts(filmName) {
      const { data } = await axios.get(
        `${process.env.REACT_APP_OMDB_API_URL}&s=${filmName}`,
      );
      setMovieList(data.Search);
    }
    fetchPosts(filmName);
  }

  function MoviePoster({ poster, title }) {
  const [imageError, setImageError] = useState(false);

  if (!poster || poster === "N/A" || imageError) {
    return <p className="noPoster">No Poster Available</p>;
  }

  return (
    <img
      src={poster}
      className="Poster"
      alt={title}
      onError={() => setImageError(true)}
    />
  );
}

  return (
    <div>
      <section id="header">
        <div className="container">
          <div className="row">
            <div className="header__bottom">
              <h3 className="search__bar--title"> Browse Our Movies! </h3>
              <div className="search">
                <input
                  className="search__bar"
                  onChange={(event) => setFilmName(event.target.value)}
                  placeholder="Search Movies"
                ></input>
                <button onClick={onSearch}>
                  <img
                    className="search__btn"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/ef/ColordrawnIcons_Simple_magnifying_glass.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="main">
        <div className="container">
          <div className="row">
            <h3 className="explainer">
              Search results for&nbsp;
              <span className="red titleHere" onChange>
                {filmName}
              </span>
            </h3>
            <select id="filter" onChange={filterMovies}>
              <option value="">Sort</option>
              <option value="AZ">A-Z</option>
              <option value="ZA">Z-A</option>
              <option value="OldNew">Oldest-Newest</option>
              <option value="NewOld">Newest-Oldest</option>
            </select>
            <div className="movie__list">
              {movieList.map((movie) => (
                <Link to={`/movies/${movie.imdbID}`} className="movie__link" key={movie.imdbID}>
                <div className="movie" key={movie.imdbID}>
                  <h4 className="Title">Title: {movie.Title}</h4>
                  <h4 className="Year">Year: {movie.Year}</h4>
                  <h4 className="imdbID">Imdb ID: {movie.imdbID}</h4>
                  {movie.Poster && movie.Poster !== "N/A" ? (
                    <MoviePoster poster={movie.Poster} title={movie.Title}
                    />
                  ) : (
                    <p className="noPoster">No Poster Available</p>
                  )}
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Movies;
