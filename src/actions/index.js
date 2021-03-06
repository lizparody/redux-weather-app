import axios from 'axios';

const API_KEY = '8314a4a9c8dbbcf6ed50bf7128b9af21';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER' //we create a variable to keep our action types consistent btwn action creators and our reducers

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},co`;
  const request = axios.get(url) //axios returns a promise, a promise is a data structure that doesn't contain yet any of our request data

  return {
    type: FETCH_WEATHER,
    payload: request //what redux-promise does is to unwrap the promise and send the actual data to the reducers.
  };
}
