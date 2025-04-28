import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import GameDetailPage from "./GameDetailPage";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([{

    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: "/", element: <HomePage/>},
      {path: "/games/:id", element: <GameDetailPage/>},
    ]


    }])

export default router;