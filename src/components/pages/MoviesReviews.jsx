import { fetchReviews } from 'components/serverApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MoviesReviews = () => {
  const [rewiev, setRewiev] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => setRewiev(results));
  }, [movieId]);

  return (
    <div>
      <ul>
        {rewiev.map(({ author, content, credit_id, avatar_path }) => {
          return (
            <li key={credit_id}>
              <h2>{author}</h2>
              <p>{content}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${avatar_path}`}
                alt="avatar"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};