import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';
import { NOTFOUND_ROUTE } from '../../constants/linkRoutes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} Component={Component} />
      ))}

      <Route
        path="*"
        element={<Navigate to={NOTFOUND_ROUTE} replace={true} />}
      />
    </Routes>
  );
};

export default AppRouter;
