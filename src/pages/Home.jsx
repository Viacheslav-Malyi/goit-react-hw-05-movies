import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFilms } from '../components/API/api';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [trendingFils, setTrendingFils] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getFetch = async () => {
      try {
        const result = await fetchFilms();
        console.log('=>', result);
        setTrendingFils([...result]);
      } catch (err) {
        console.log('error');
      }
    };
    getFetch();
  }, []);

  return (
    <main>
      <h2>Trending this week</h2>
      <ul>
        {trendingFils.map(film => (
          <li key={film.id}>
            {
              <NavLink to={`movies/${film.id}`} state={{ from: location }}>
                <p>{film.name || film.title}</p>
              </NavLink>
            }
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
