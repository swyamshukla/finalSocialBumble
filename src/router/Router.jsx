import { createBrowserRouter } from "react-router";

import Signup from "../components/Pages/Signup";
import Login from "../components/Pages/Login";
import AuthLayout from "../components/Layout/authLayout";
import MainLayout from "../components/Layout/MainLayout";
import Home from "../components/Pages/Home";


import About from "../components/Pages/Dashboard";
import Search from "../components/Pages/Search";
import Setting from "../components/Pages/Setting";
import Help from "../components/Pages/Help";
import Dashboard from "../components/Pages/Dashboard";
import { path } from "motion/react-client";
import ProfileDashboard from "../components/Pages/ProfileDashboard";
import { FormProfile } from "../components/form/FormProfile";




export let router= createBrowserRouter([{
    path:'/',
    element: <AuthLayout />,
    children:[
        {
            path:'/',
            element: <MainLayout />,
            children:[
                {
                    path:'/',
                    element: <Home />
                },
                {
                    path:'/dashboard',
                    element: <Dashboard />,
                    children:[
                        {
                            path:'',
                            element: <ProfileDashboard />
                        },
                        {
                            path:'fillprofile',
                            element: <FormProfile />
                        }


                    ]
                },
                {
                    path:'/search',
                    element: <Search />
                },
                {
                    path:'/setting',
                    element: <Setting />
                },               
                {
                    path:'/help',
                    element: <Help />
                },


            ]
        }
    ]
},
{
   path:'/signup',
    element: <Signup />,
},
{
   path:'/login',
    element: <Login />,
},
])