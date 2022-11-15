import { fetchFilmsByCredits } from 'components/API/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, ListItem } from './Cast.styled';
import Default from '../../Images/Default.png';

const Cast = () => {
  const { movieId } = useParams();
  const [castData, setCostData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const getFeatch = async () => {
      try {
        const result = await fetchFilmsByCredits(movieId);
        setCostData(result);
      } catch (error) {
        console.log(error);
      }
    };
    getFeatch();
  }, [movieId]);

  if (castData) {
    return (
      <div>
        <h3>Cast</h3>
        <List>
          {castData.map(el => (
            <ListItem key={el.id}>
              <img
                src={
                  el.profile_path && loaded
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : Default
                }
                alt={el.name}
                width="150"
                onLoad={() => setLoaded(true)}
              />
              <div>
                <h3>Name</h3>
                <p>{el.name}</p>
                <h3>Character</h3>
                <p>{el.character}</p>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
};

export default Cast;
