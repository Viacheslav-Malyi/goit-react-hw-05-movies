import { fetchFilmsById } from 'components/API/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { WrapInfo } from './MoviesDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [genres, setGenres] = useState([]);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchFilmsById(movieId);
        setMovieData(result);
        setGenres(result.genres);
        console.log('123', result.genres);
      } catch (error) {
        console.log(error);
      }
    };
    getFetch();
  }, [movieId]);

  if (movieData) {
    const { poster_path, title, release_date, popularity, overview } =
      movieData;
    const genresMap = genres.map(el => el.name + ', ');

    return (
      <div>
        <NavLink to={backLinkHref} type="buttun">
          Back
        </NavLink>
        <h2>MovieDetailsPage</h2>
        <WrapInfo>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            width="350"
          />

          <div>
            <h2>
              {movieData.title}({release_date.slice(0, 4)})
            </h2>
            <h3>Overview</h3>
            <p>{overview}</p>
            <p>User Score : {Math.round(Number(popularity))}%</p>
            <h3>Genres</h3>
            <p>{genresMap}</p>
          </div>
        </WrapInfo>
        <ul>
          <li>
            <NavLink to="cast" state={{ from: backLinkHref }} end>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </ul>

        <Outlet />
      </div>
    );
  }
  return;
};
export default MovieDetails;
