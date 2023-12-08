import App from "../App";
import { createBrowserRouter, redirect } from "react-router-dom";
import DashboardPage from "../components/Dashboard";
import AddMovies from "../components/EditCreateMoviesPage";
import MoviesPage from "../components/MoviesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterAdmin";
import EditMovies from "../components/EditMovies"
import GenresPage from "../components/GenresPage";

function authentication () {
    if (!localStorage.access_token) {
        redirect('/login')
        return null
    } else {
        return null
    }
}

const router = createBrowserRouter([{
    path: "/",
    element: <App />,
    loader: authentication,
    children: [
        {
            path: "",
            element: <DashboardPage />,
        },
        {
            path: "movies/:id",
            element: <EditMovies/>
        },
        {
            path: "movies",
            element: <MoviesPage />
        },
        {
            path: "login",
            element: <LoginPage />
        },
        {
            path: "register/admin",
            element: <RegisterPage />
        },
        {
            path: "movies/add",
            element: <AddMovies/>
        },
        {
            path: "genres",
            element: <GenresPage/>
        }
    ],
}])

export default router