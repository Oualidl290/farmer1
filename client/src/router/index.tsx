import { createBrowserRouter } from "react-router-dom";
// layouts
import FarmerDashboardLayout from "../layouts/farmer-dashboard";
// pages
import Home from "./pages/home";
// farmer page
import FarmerDashboard from "./pages/dashboard/index";
import ProductsDashboard from "./pages/dashboard/products";
import Login from "./pages/auth/login";

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
      {
        path: "products",
        element: <ProductsDashboard />,
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
