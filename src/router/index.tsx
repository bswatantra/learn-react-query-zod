import { Auth, Guest } from "../utils/auth";

import AppLayout from "../layouts/AppLayout";
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
                element: (
                    <Guest>
                        <Login />
                    </Guest>
                ),
            },
            {
                path: "register",
                element: (
                    <Guest>
                        <Register />
                    </Guest>
                ),
            },
        ],
    },
]);

export default router;