import React from "react";
import { RouteObject } from "react-router-dom";
import { Homepage } from "../pages";

interface IRoutes extends RouteObject {
  typeRoute: "PUBLIC" | "PRIVATE";
}

const ROUTES: IRoutes[] = [
  {
    typeRoute: "PUBLIC",
    element: <Homepage />,
    path: "/",
  },
];

export default ROUTES;
