import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import About from "../pages/About/About";
import Catalog from "../pages/Catalog/Catalog";
import News from "../pages/News/News";
import SalesPoints from "../pages/SalesPoints/SalesPoints";
import Partners from "../pages/Partners/Partners";
import Contacts from "../pages/Contacts/Contacts";


export const privateRoutes = [
    { path: "/", element: <Main /> },
    { path: "/about", element: <About /> },
    { path: "/*", element: <ErrorPage /> }
]

export const publicRoutes = [
    { path: "/", element: <Main /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    { path: "/*", element: <ErrorPage /> },
]