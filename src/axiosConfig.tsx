import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_HOST,
    headers: {
        'Content-Type': 'application/json'
    }
});

export { api }