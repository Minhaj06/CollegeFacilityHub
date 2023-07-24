import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import RegisterPage from "../pages/registerPage/RegisterPage";
import ProfileUpdatePage from "../pages/profileUpdatePage/ProfileUpdatePage";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import MainLayout from "../layout/MainLayout";
import CollegesPage from "../pages/collegesPage/CollegesPage";
import CollegeDetailsPage from "../pages/collegeDetailsPage/CollegeDetailsPage";
import AdmissionPage from "../pages/admissionPage/AdmissionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <ProfileUpdatePage />
          </PrivateRoute>
        ),
      },
      {
        path: "colleges",
        element: <CollegesPage />,
      },
      {
        path: "college/:id",
        element: (
          <PrivateRoute>
            <CollegeDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "admission",
        element: <AdmissionPage />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
