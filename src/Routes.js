import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Questions from "./components/Questions";
import Statistics from "./components/Statistics";
import Topics from "./components/Topics";
import Main from "./layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>,
            },
            {
                path: 'home',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>,
            },
            {
                path: 'topics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics></Topics>,
            },
            {
                path: 'topic/:id',
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Questions></Questions>
            },
            {
                path: 'statistics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Statistics></Statistics>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
        ]
    }
]);