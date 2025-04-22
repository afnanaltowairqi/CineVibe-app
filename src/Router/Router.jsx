import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
// import SignUp from "./pages/SignUp";
// import Login from "./pages/Login";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement:<ErrorPage/>
        },
        // {
        //     path: "/signup",
        //     element: <SignUp />,
        // },
        // {
        //     path: "/login",
        //     element: <Login />,
        // },
      ]);
    return(
        <RouterProvider router={router} />
    );
}
export default Router