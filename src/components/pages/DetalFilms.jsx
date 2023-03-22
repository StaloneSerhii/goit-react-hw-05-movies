import { fetchDetalsFilm } from 'components/serverApi';
import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetalFilms = () => {
  const [filmInfo, setFilmInfo] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchDetalsFilm(movieId).then(resp => setFilmInfo(resp.data));
  }, [movieId]);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/original/${filmInfo.backdrop_path}`}
        alt={filmInfo.title}
        width="600px"
      />
      <h2>{filmInfo.original_title}</h2>
      <p>{filmInfo.overview}</p>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </div>
  );
};

export default DetalFilms;
