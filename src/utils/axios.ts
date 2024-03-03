import axios from "axios";
const https = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
});

https.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

export default https;