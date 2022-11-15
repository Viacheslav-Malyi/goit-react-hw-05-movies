import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import { Notification, Toast } from 'components/Notification/Notification';
import { Search } from 'components/Search/Search';
import { fetchFilmsByQuery } from 'components/API/api';

const Movies = () => {
  const [status, setStatus] = useState('idle');
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const search = searchParams.get('name') ?? '';

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ name: event.target.elements.query.value });
  };

  useEffect(() => {
    if (!search) return;
    const getFetch = async () => {
      try {
        const result = await fetchFilmsByQuery(search);
        setSearchResult(result);
        if (searchResult.length === 0) {
          throw new Error();
        }
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
        Notification();
      }
    };
    getFetch();
  }, [search, searchParams, searchResult.length]);

  if (status === 'idle') {
    return (
      <div>
        <h2>Movies</h2>
        <Search onSubmit={handleSubmit} value={search} />
      </div>
    );
  }

  if (status === 'pending') {
    return (
      <div>
        <h2>Movies</h2>
        <Search onSubmit={handleSubmit} value={search} />
      </div>
    );
  }
  if (status === 'resolved') {
    return (
      <div>
        <h2>Movies</h2>
        <Search onSubmit={handleSubmit} value={search} />
        {searchResult && (
          <ul>
            {searchResult.map(el => (
              <li key={el.id}>
                <NavLink to={`${el.id}`} state={{ from: location }}>
                  <p>{el.name || el.title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  if (status === 'rejected') {
    return (
      <div>
        <h2>Movies</h2>
        <Search onSubmit={handleSubmit} value={search} />
        <Toast />
      </div>
    );
  }
};
export default Movies;
