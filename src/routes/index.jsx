import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/not-found/NotFound";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
