import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRouter from "./PrivetRouter";
import AddReview from "../pages/AddReview";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addReview",
        element: (
          <PrivetRouter>
            <AddReview />
          </PrivetRouter>
        ),
      },
    ],
  },
]);
