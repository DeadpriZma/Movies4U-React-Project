
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import MoviePage from "./pages/MoviePage/MoviePage";
import Movies from "./pages/Movies/Movies";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
