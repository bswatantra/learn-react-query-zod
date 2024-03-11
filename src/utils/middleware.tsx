import { Navigate } from "react-router-dom";
import React from "react";

const token = localStorage.getItem('access_token');
export function Auth({ children }: { children: React.ReactNode }) {
    return token ? children : <Navigate to={'/auth/login'} />;
}


export function Guest({ children }: { children: React.ReactNode }) {
    return token ? <Navigate to={'/'} /> : children;
}