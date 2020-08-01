const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'http://localhost:3000';

export default {
    URL_BACKEND,
};