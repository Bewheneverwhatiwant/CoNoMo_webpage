import { createBrowserRouter } from "react-router-dom";
import ForOutlet from "./pages/ForOutlet";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/MainPage/Login/Login";
import Signup from "./pages/MainPage/Signup/Signup";

export default createBrowserRouter([
    {
        path: "/",
        element: <ForOutlet />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "/loginpage",
                element: <Login />
            },
            {
                path: "/signuppage",
                element: <Signup />
            }
        ]
    }
]);