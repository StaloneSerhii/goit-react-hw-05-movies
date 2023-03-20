import { fetchData } from 'components/serverApi';
import { useEffect } from 'react';
import { useState } from 'react';

export const Home = () => {
  const [films, getFilms] = useState([]);

  useEffect(() => {
    fetchData().then(({ results }) => getFilms(results));
  }, []);

  return console.log(films);
};
