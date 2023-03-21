import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Movies } from './movies/Movies';
import DetalFilms from './pages/DetalFilms';
import { Home } from './pages/Home';
import { MoviesDetails } from './pages/MoviesDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<DetalFilms />} />
        <Route path="cast" element={<div>Test App</div>} />
        <Route path="reviews" element={<MoviesDetails />} />
        <Route />
      </Route>
    </Routes>
  );
};
