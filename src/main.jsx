import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <MainLayout />
  </RouterProvider>
);
