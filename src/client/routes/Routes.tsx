import React from "react";
import { RouteObject } from "react-router-dom";
import { Homepage, LoginPage } from "../pages";

interface IRoutes extends RouteObject {
  typeRoute: "PUBLIC" | "PRIVATE";
}

const ROUTES: IRoutes[] = [
  {
    typeRoute: "PUBLIC",
    element: <Homepage />,
    path: "/",
  },
  {
    typeRoute: "PUBLIC",
    element: <LoginPage />,
    path: "/login",
  },
];

export default ROUTES;
