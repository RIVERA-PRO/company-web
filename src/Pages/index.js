import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import BlogPage from "./Blog/BlogPage";
import BlogDetail from "./BlogDetail/BlogDetail";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,

    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/blog",
                element: <BlogPage />,
            },
            {
                path: "/BlogDetail/:id/:titulo",
                element: <BlogDetail />,
            },


        ],
    },

]);
