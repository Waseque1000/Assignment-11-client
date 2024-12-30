import { createBrowserRouter } from "react-router-dom";
import Create from "../components/auth/Create";
import Login from "../components/auth/Login";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import NotFound404 from "../pages/NotFound404";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AllArtifacts from "../components/AllArtifacts";
import AddArtifact from "../components/AddArtifacts";
import ArtifactDetails from "../components/ArtifactDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound404 />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/all-data"),
      },
      {
        path: "/all-artifacts",
        element: (
          <PrivateRoute>
            <AllArtifacts />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/all-data"),
      },
      {
        path: "/add-artifacts",
        element: (
          <PrivateRoute>
            <AddArtifact />
          </PrivateRoute>
        ),
      },
      {
        path: "/artifact/:id",
        element: (
          <PrivateRoute>
            <ArtifactDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/artifact/${params.id}`),
      },

      {
        path: "/auth/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/auth/create",
        element: (
          <PublicRoute>
            <Create />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound404 />,
  },
]);
