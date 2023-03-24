import { fetchData } from 'components/serverApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Home = () => {
  const [films, getFilms] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchData().then(({ results }) => getFilms(results));
  }, []);

  return (
    <div>
      <ul>
        {films.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
