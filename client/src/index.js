import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Components/Pages/Home";
import LoginForm from "./Components/Pages/Login";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/about";
// import Services from "./Components/Pages/services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Hotel from "./Components/hotel/Hotel";
import List from "./Components/list/List";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Components/Pages/ProtectedRoute";
import UserManagement from "./Components/UserManagement";
import Room from "./Components/Pages/Room";
import Payment from "./Components/Pages/payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "rooms",
        element: <Hotel />,
      },
      {
        path: "hotels",
        element: <List />,
      },
      ,
      {
        path: "hotels/:item.id",
        element: <Room />,
      },
      {
        path: "hotels/payment",
        element: <Payment />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },

      {
        path: "users",
        element: (
          <ProtectedRoute>
            <UserManagement />
          </ProtectedRoute>
        ),
      },
    ],
    erroeElement: <h1 className="text-center text-light"> 404 not found :(</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-qdp67cma.us.auth0.com"
      clientId="ixmpTNnz8MR8VFvqyWt8jSMbzAyEOVuO"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
