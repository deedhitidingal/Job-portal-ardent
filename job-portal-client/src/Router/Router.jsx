import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import SalaryPage from "../components/SalaryPage";

import CurrentJobs from "../components/CurrentJobs";
import PostJob from "../components/PostJob";
import Application from "../components/Application";

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
          path:"/apply",
          element:<Application/>
        }
      ]
    },
  ]);

  export default router;