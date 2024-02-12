import Mainpage from "./page/main-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
]);