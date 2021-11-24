import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { generalRoutes, privateRoutes, publicRoutes } from "../utils/routes";

function AppRoutes () {
  const [routes] = useState([...privateRoutes, ...publicRoutes, ...generalRoutes]);

  return(
      <Routes>
        {
          routes.map((route, index) => {
            return <Route key={index} {...route} />
          })
        }
      </Routes>
  );
}

export default AppRoutes;