import {
     createBrowserRouter,

} from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
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

     }
])