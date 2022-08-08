import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./Routes";

const Navigation = () => {
  return (
    <Routes>
      {ROUTES.filter(routes => routes.typeRoute === "PUBLIC").map(routes => (
        <Route key={routes.path} path={routes.path} element={routes.element} />
      ))}
    </Routes>
  );
};

export default Navigation;
