import { createBrowserRouter } from "react-router";
import Homelayouts from "../Layouts/Homelayouts";
import Home from "../Pages/Home";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Homelayouts,
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
                path:"servicedetails/:id"
            }
        ]
    },
])