import React from "react";
import { Route, Routes } from "react-router";
import { router } from "./index";

const AppRoutes = () => {
  return (
    <Routes>
      {router.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
