import axios from "axios";

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
        switch (error.response.status) {
            case 401:
                localStorage.removeItem("access_token");
                break;

            case 404:
              window.location.href = "/errors/not-found";
              break;
        }
        return Promise.reject(error);
    }
);


export default https;