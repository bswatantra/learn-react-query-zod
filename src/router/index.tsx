import AppLayout from "../layouts/AppLayout";
import { Auth } from "../utils/auth";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../views/Home";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "",
                element: (
                    <Auth>
                        <Home />
                    </Auth>
                ),
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