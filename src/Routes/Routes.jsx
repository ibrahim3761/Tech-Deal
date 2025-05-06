import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import About from "../Pages/About";
import Error from "../Pages/Error";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "../Provider/PrivateRoute";
import Loader from "../Pages/Loader";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Homelayouts,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                path:"/",
                loader:()=> fetch("/data.json"),
                Component:Home,
            },
            {
                path:"login",
                Component:LogIn,
            },
            {
                path:"register",
                Component:Register,
            },
            {
                path:"servicedetails/:id",
                element: (<PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                </PrivateRoute>),
                loader:()=>fetch("/data.json"),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path:"about",
                element:(<PrivateRoute>
                    <About></About>
                </PrivateRoute>),
                hydrateFallbackElement: <Loader></Loader>
            },
            {
                path:"my-profile",
                element:(<PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>),
                hydrateFallbackElement: <Loader></Loader>
            }
        ]
    },
])