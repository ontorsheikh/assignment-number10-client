import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivetRouter from "./PrivetRouter";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import MyReviews from "../pages/MyReviews";
import Error from "../pages/Error";
import MyFavorites from "../pages/MyFavorites";
import ReviewDetails from "../pages/ReviewDetails";
import EditReview from "../pages/EditReview";
import About from "../pages/About";

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
        path: "/allReviews",
        Component: AllReviews,
      },
      {
        path: "/review/:id",
        element: (
          <PrivetRouter>
            <ReviewDetails />
          </PrivetRouter>
        ),
      },
      {
        path: "/addReview",
        element: (
          <PrivetRouter>
            <AddReview />
          </PrivetRouter>
        ),
      },
      {
        path: "/editReview/:id",
        element: (
          <PrivetRouter>
            <EditReview />
          </PrivetRouter>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivetRouter>
            <MyReviews />
          </PrivetRouter>
        ),
      },
      {
        path: "/myFavorites",
        element: (
          <PrivetRouter>
            <MyFavorites />
          </PrivetRouter>
        ),
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/*",
        Component: Error,
      },
    ],
  },
]);
