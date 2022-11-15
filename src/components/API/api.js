import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
export const fetchFilms = async () => {
  const response = await axios.get(`${BASE_URL}/trending/all/day`, {
    params: {
      api_key: 'e589c321259a53f509b2181777f7ae5f',
    },
  });

  return response.data.results;
};

export const fetchFilmsByQuery = async query => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: 'e589c321259a53f509b2181777f7ae5f',
      query: query,
    },
  });

  return response.data.results;
};

export const fetchFilmsById = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: 'e589c321259a53f509b2181777f7ae5f',
    },
  });

  return response.data;
};

export const fetchFilmsByCredits = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: {
      api_key: 'e589c321259a53f509b2181777f7ae5f',
    },
  });

  return response.data.cast;
};

export const fetchFilmsReviews = async id => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/reviews`, {
    params: {
      api_key: 'e589c321259a53f509b2181777f7ae5f',
    },
  });

  return response.data.results;
};
