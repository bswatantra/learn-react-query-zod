import { Auth, Guest } from "../utils/auth";

import AppLayout from "../layouts/AppLayout";
import GuestLayout from "../layouts/GuestLayout";
import Home from "../views/Home";
import Login from "../views/auth/Login";
import NotFound from "../views/errors/404";
import Register from "../views/auth/Register";
import ShowProduct from "../views/product/Show";
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
        path: "/products",
        element: <AppLayout />,
        children: [
            {
                path: ":id",
                element: (
                    <Auth>
                        <ShowProduct />
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


    {
        path: "/errors",
        element: <GuestLayout />,
        children: [
            {
                path: "not-found",
                element: <NotFound />
            },
        ],
    },
]);

export default router;