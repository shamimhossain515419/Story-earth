import {
     createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../Authontication/Register/Register";
import Layout from "../pages/Dashobard/Dashboard/Layout";
export const Route = createBrowserRouter([
     {
          path: '/',
          element: <Main></Main>,
          children: [
               {
                    path: '/',
                    element: <Home></Home>
               }
          ]

     },
     {
          path: '/login',
          element: <Register></Register>
     },
     {
           path:'/dashboard',
           element:<Layout></Layout>,
           children:[
               {
                    path:"/dashboard"
               },
               
           ]
     }
])