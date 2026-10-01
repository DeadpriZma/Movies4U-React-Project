import React from 'react';
import "./Home.css"
import { Link } from 'react-router-dom';

import homecinema from "../../assets/undraw_home-cinema_jdm1.svg"

const Home = () => {
  return (
    <div>
      <div className="home__container">
        <h1 className="home__title">Welcome to Movies4U!</h1>
        <p>Discover and explore a world of movies at your fingertips. Search for your favorite films, view details, and dive into the cinematic universe with all of the information you need.</p>
        <img src={homecinema} alt="Home Cinema" className="home__image" />
        <Link to="/movies" className="explore__button">Explore Movies</Link>
      </div>
    </div>
  );
}

export default Home;