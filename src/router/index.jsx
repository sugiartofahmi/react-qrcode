import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ScanQR from "../pages/ScanQR";
import GenerateQR from "../pages/GenerateQR";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scan",
    element: <ScanQR />,
  },
  {
    path: "/generate",
    element: <GenerateQR />,
  },
]);

export default Router;
