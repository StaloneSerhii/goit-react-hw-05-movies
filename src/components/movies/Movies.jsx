import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovieId } from '../serverApi';

export const Movies = () => {
  const [serch, setSerch] = useSearchParams();
  const [getMovies, setGetMovies] = useState([]);
  const [test, setTest]= useState({})
  const findNameFilms = serch.get('qury') ?? '';

  useEffect(() => {
    if (serch.get('qury') !== null) {
      searchMovieId(serch.get('qury')).then(resp => setGetMovies(resp.results));
    }
  }, []);

  const getMovied = () => {
    searchMovieId(findNameFilms).then(resp => setGetMovies(resp.results));
    setSerch(test);
  };

  const updateQueryString = name => {
    const nameMov = name.target.value;
    setTest = nameMov !== '' ? { qury: nameMov } : {};
    
  };

  return (
    <div>
      <input type="text" value={findNameFilms} onChange={updateQueryString} />
      <button onClick={getMovied}>send</button>
      <ul>
       {findNameFilms.length > 1 ? getMovies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        }): <li></li>}
      </ul>
    </div>
  );
};
