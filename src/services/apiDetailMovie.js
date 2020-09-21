import axios from 'axios';

const api = axios.create({
  baseURL:
    // 'https://api.themoviedb.org/3/keyword/180547/movies?api_key=3bbdfd3fe09b8205dc22905c5bccf33b&language=en-US&include_adult=true',
    'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: '3bbdfd3fe09b8205dc22905c5bccf33b',
  },
});

export default api;
