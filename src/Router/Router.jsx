import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import ManageJobsByCEO from "../Components/SideNavs/Admin/ManageJobsByCEO";
import ManageMembersByCEO from "../Components/SideNavs/Admin/ManageMembersByCEO";
import Add_A_Job from "../Components/SideNavs/Hr/Add_A_Job";
import My_PostedJobs from "../Components/SideNavs/Hr/My_PostedJobs";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import DashBoard from "../Pages/DashBoard";
import ErrorPage from "../Pages/ErrorPage";
import Jobs from "../Pages/Jobs";
import UserEnrolled from './../Components/SideNavs/NormalUser/UserEnrolled';
import AdminPrivate from "./Private/AdminPrivate";
import BasicCheck from "./Private/BasicCheck";
import { default as HrPrivate } from "./Private/HrPrivate";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/dashboard",
        element: <BasicCheck> <DashBoard /> </BasicCheck>,
        children: [
          {
            path: "add_a_job",
            element: <HrPrivate><Add_A_Job /></HrPrivate> ,
          },
          {
            path: "My_PostedJobs",
            element: <HrPrivate>< My_PostedJobs /></HrPrivate> ,
          },
          {
            path: "ManageJobsByCEO",
            element: (
              <AdminPrivate>
                <ManageJobsByCEO />
              </AdminPrivate>
            ),
          },
          {
            path: "manageMembersByCEO",
            element: (
              <AdminPrivate>
                <ManageMembersByCEO />
              </AdminPrivate>
            ),
          },
          {
            path: "enrolled",
            element: <UserEnrolled /> 
          },
        ],
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

export default Router;
