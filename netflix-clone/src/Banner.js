import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";
function Banner() {
  const [movie, setMovie] = useState([]);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);
  return (
    <header
      className="img"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner">
        <h1 className="title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_btn">
          <button className="btn">Play</button>
          <button className="btn">My List</button>
        </div>
        <h1 className={"banner_des"}>{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="fade"></div>
    </header>
  );
}
export default Banner;
