import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layayt/Layout';
//import Home from '../pages/Home';
//import Movies from 'pages/Movies';
//import MovieDetails from './MoviesDetails/MoviesDetails';
//import Cast from './Cast/Cast';
//import Reviews from './Revievs/Revievs';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home.jsx'));
const Movies = lazy(() => import('../pages/Movies.jsx'));
const MovieDetails = lazy(() => import('./MoviesDetails/MoviesDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Revievs/Revievs.jsx'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
