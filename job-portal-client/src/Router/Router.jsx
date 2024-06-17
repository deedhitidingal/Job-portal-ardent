import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import SalaryPage from "../components/SalaryPage";
import CurrentJobs from "../components/CurrentJobs";
import PostJob from "../components/PostJob";
import Application from "../components/Application";
import Login from "../components/Login";
import Register from "../components/Register";
import Logout from "../components/Logout";
import Job_details from "../components/Job_details";
import Registercard from "../components/Registercard";
import HirerRegister from "../components/HirerRegister";
import User_dash from "../components/User_dash";
import HirereDetails from "../components/HirereDetails";
import AdminHome from "../components/Admin/AdminHome";
import AdminUsers from "../components/Admin/AdminUsers";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:"/",
            element:<Home/>
        },
        {
          path:"/salary-estimate",
          element:<SalaryPage/>
        },
        {
          path:"/current-jobs",
          element:<CurrentJobs/>
        },
       
        {
          path:"/details/apply",
          element:<Application/>
        },
        // {
        //   path:"/details",
        //   element:< Job_details/>
        // }
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/logout",
          element:<Logout/>
        },
        {
          path:"/jobdetails/:id",
          element:< Job_details/>
        },
        {
          path:"/registercard",
          element:<Registercard/>
        },
        {
          path:"/hirerregister",
          element:<HirerRegister/>
        },
        {
          path:"/hirerdetails",
          element:<HirereDetails/>
        },
        {
          path:"/userdash",
          element:< User_dash/>
        },
        {
          path:'/admin',
          element:<AdminHome/>,
          children:[
              {
                  path:'users',
                  element:<AdminUsers/>,
              },
              {
                index: true, // This will render DefaultAdminPage when path is exactly /admin
                element: <PostJob/>, 
              },
          ]
      },
        
      ]
      
    },
  ]);

  export default router;