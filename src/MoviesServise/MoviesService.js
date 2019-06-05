import requests from '../ApiService/requests';
import MoviesEndpoints from './MoviesEndpoints';

function queryToString(queryObject) {
  const keysValues = Object.keys(queryObject).map(key => `${key}=${queryObject[key]}`).join('&');
  return `?${keysValues}`;
}

export function getMoviesByQuery(query) {
  const queryString = queryToString(query);
  return requests(MoviesEndpoints.movies.url + queryString, MoviesEndpoints.movies.method);
}

export function updateMovieRate(query) {
  const queryString = queryToString(query);
  return requests(MoviesEndpoints.rate_movie.url + queryString, MoviesEndpoints.rate_movie.method);
}
