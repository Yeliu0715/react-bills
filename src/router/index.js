// create router instance, import all routes and export it
import { createBrowserRouter } from "react-router-dom";

import Layout from "@/pages/Layout";
import New from "@/pages/New";
import Month from "@/pages/Month";
import Year from "@/pages/Year";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Month />,
            },
            {
                path: "month",
                element: <Month />,
            },
            {
                path: "year",
                element: <Year />,
            },
        ],
    },
    {
        path: "/new",
        element: <New />,
    },
    {
        path: "*",
        element: <NotFound />,
    }
    
]);

export default router;