import { fetchFilmsReviews } from 'components/API/api';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const getFeatch = async () => {
      try {
        const result = await fetchFilmsReviews(movieId);
        setReviewsData(result);
        console.log('1243546578', result);
      } catch (error) {
        console.log(error);
      }
    };
    getFeatch();
  }, [movieId]);

  if (reviewsData.length > 0) {
    return (
      <div>
        <ul>
          {reviewsData.map(el => (
            <li key={el.id}>
              <h3>{el.author}</h3>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <h3>There is no reviews.</h3>;
};

export default Reviews;
