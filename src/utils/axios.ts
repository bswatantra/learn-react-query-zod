import axios from "axios";
import { useNavigate } from 'react-router-dom';

const https = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 5000,
});

https.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
});

https.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const navigate = useNavigate();

        switch (error.response.status) {
            case 401:
                localStorage.removeItem("access_token");
                navigate("/auth/login");
                break;

            // case 404:
            //   window.location.href = "catchAll";
            //   break;
        }
        return Promise.reject(error);
    }
);


export default https;