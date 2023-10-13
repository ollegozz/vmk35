import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";


export const privateRoutes = [
    { path: "/*", element: <ErrorPage /> }
]

export const publicRoutes = [
    { path: "login", element: <Login /> }
]