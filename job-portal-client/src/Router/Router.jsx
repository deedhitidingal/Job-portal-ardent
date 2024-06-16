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
import User_dash from "../components/User_dash";

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
          path:"/post-job",
          element:<PostJob/>
        },
        {
          path:"/details/apply",
          element:<Application/>
        },
        {
          path:"/details",
          element:< Job_details/>
        },
        {
          path:"/userdash",
          element:< User_dash/>
        }
        
      ]
    },
  ]);

  export default router;