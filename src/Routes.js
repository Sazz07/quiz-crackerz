import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Main from "./layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Home></Home>,
            },
            {
                path: 'topics',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Topics></Topics>,
            },
        ]
    }
]);