import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import AppLayout from "../layouts/AppLayout";
import GuestLayout from "../layouts/GuestLayout";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
        ],
    },

    {
        path: "/auth",
        element: <GuestLayout />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ],
    },
]);

export default router;