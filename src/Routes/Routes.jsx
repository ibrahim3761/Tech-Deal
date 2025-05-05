import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import About from "../Pages/About";
import Error from "../Pages/Error";

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
                Component:ServiceDetails,
                loader:()=>fetch("/data.json")
            },
            {
                path:"about",
                Component:About,
            }
        ]
    },
])