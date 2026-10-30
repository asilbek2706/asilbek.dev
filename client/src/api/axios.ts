import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL ||  'https://asilbek-api-1626.onrender.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
