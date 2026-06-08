import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getWeather = (city) => api.get(`/weather?city=${city}`);