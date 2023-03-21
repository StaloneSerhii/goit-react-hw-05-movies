import { fetchData } from 'components/serverApi';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [films, getFilms] = useState([]);

  useEffect(() => {
    fetchData().then(({ results }) => getFilms(results));
  }, []);

  return (
    <div>
      {films.map(({ title, id }) => {
        return (
          <div>
            <Link key={id} to={`/movies/${id}`}>
              {title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
