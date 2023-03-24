import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { searchMovieId } from '../serverApi';

export const Movies = () => {
  const [serch, setSerch] = useSearchParams();
  const [getMovies, setGetMovies] = useState([]);
  const [valueInput, setValueInput] = useState({});
  const location = useLocation();
  const findNameFilms = serch.get('qury') ?? '';

  useEffect(() => {
    if (findNameFilms !== null) {
      searchMovieId(findNameFilms).then(resp => setGetMovies(resp.results));
    }
  }, [findNameFilms]);

  const updateQueryString = name => {
    const nameMov = name.target.value;
    const quryMov = nameMov !== '' ? { qury: nameMov } : {};
    setValueInput(quryMov);
  };

  return (
    <div>
      <input type="text" onChange={updateQueryString} />
      <button
        onClick={() => {
          setSerch(valueInput);
        }}
      >
        send
      </button>
      <ul>
        {findNameFilms.length > 1 ? (
          getMovies.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link state={{ from: location }} to={`/movies/${id}`}>
                  {title}
                </Link>
              </li>
            );
          })
        ) : (
          <li></li>
        )}
      </ul>
    </div>
  );
};
