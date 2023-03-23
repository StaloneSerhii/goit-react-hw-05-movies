import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Movies } from './movies/Movies';
import DetalFilms from './pages/DetalFilms';
import { Home } from './pages/Home';
import { MoviesCast } from './pages/MoviesCast';
import { MoviesReviews } from './pages/MoviesReviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<DetalFilms />}>
          <Route path="cast" element={<MoviesCast />} />
          <Route path="reviews" element={<MoviesReviews />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Route>
    </Routes>
  );
};
