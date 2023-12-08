import App from "../App";
import LandingPage from '../components/LandingPage'
import { createBrowserRouter } from "react-router-dom";
import MoviesDetail from "../components/MovieDetail";

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    children: [
        {
            path: "",
            element: <LandingPage/>
        },
        {
            path: "movies/:id",
            element: <MoviesDetail/>
        }
    ],
}])

export default router
