import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import generalRoutes from "../routes/generalRoutes";
import privateRoutes from "../routes/privateRoutes";
import publicRoutes from "../routes/publicRoutes";

function AppRoutes ({isAuth}) {
  const [routes, setRoutes] = useState([...privateRoutes, ...publicRoutes, ...generalRoutes]);

  useEffect(() => {
    if(isAuth){
      setRoutes([...privateRoutes, ...generalRoutes]);
    } else{
      setRoutes([...publicRoutes, ...generalRoutes]);
    }
  }, [isAuth]);

  return(
    <Routes>
      {
        routes.map((route, index) => {
          return <Route key={index} {...route} />
        })
      }
      <Route path="*" element={<Navigate replace to="/error/404" />} />
    </Routes>
  );
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps)(AppRoutes);
