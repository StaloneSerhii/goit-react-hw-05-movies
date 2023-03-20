import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { Movies } from './movies/Movies';
import { Home } from './pages/Home';
import { MoviesDetails } from './pages/MoviesDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<div>films</div>} />
        <Route path="cast" element={<MoviesDetails />} />
        <Route path="reviews" element={<MoviesDetails />} />
        <Route />
      </Route>
    </Routes>
  );
};
