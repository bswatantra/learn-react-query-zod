import { Navigate } from "react-router-dom";

export function Auth({ children }: { children: React.ReactNode }) {
    const token = localStorage.getItem('access_token');
    return token ? children : <Navigate to={'/auth/login'} />;
}


export function Guest({ children }: { children: React.ReactNode }) {
    const token = localStorage.getItem('access_token');

    return token ? <Navigate to={'/'} /> : children;
}