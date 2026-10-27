import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.asilbek-karomatov.dev/api/v1',
});

export default api;