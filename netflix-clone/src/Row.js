import { useEffect, useState } from "react";
import axios from "./axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base = "https://image.tmdb.org/t/p/original";
function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);
  function handleClick(movie) {
    movieTrailer(movie?.name || "")
      .then((url) => {
        const params = new URLSearchParams(new URL(url).search);
        const str = params.get("v");
        if (trailerUrl === str) {
          setTrailerUrl("");
        } else {
          setTrailerUrl(params.get("v"));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="movieContainer">
        {movies.map((movie, key) => {
          return (
            <img
              className={`row_poster ${props.isLargeRow && "biggerRow"}`}
              src={
                props.isLargeRow
                  ? base + movie.poster_path
                  : base + movie.backdrop_path
              }
              alt={base + movie.name}
              key={key}
              onClick={() => {
                handleClick(movie);
              }}
            />
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} />}
    </div>
  );
}

export default Row;
