import { fetchCast } from 'components/serverApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MoviesCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId).then(({ cast }) => setCast(cast));
  }, []);
  return (
    <div>
      <ul>
        {cast.map(({ character, name, id, profile_path }) => {
          return (
            <li key={id}>
              <h2>{name}</h2>
              <p>{character}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                alt="avatar"
                width="200px"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
