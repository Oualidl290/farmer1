import { createBrowserRouter } from "react-router-dom";
// layouts
import FarmerDashboardLayout from "../layouts/farmer-dashboard";
// pages
import Home from "./pages/home";
// farmer page
import FarmerDashboard from "./pages/dashboard/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "farmer",
    element: <FarmerDashboardLayout />,
    children: [
      {
        path: "dashboard",
        element: <FarmerDashboard />,
      },
    ],
  },
]);

export default router;
