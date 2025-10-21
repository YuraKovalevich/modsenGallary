import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../../routes';
import {
  GALLERY_ROUTE,
  IMAGES_ROUTE,
  NOTFOUND_ROUTE,
} from '../../constants/linkRoutes';
import FindImages from '../layout/FindImages';
import Gallary from '../../pages/Gallary';
import Images from '../../pages/Images';

const AppRouter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Routes>
      <Route
        path={GALLERY_ROUTE}
        element={
          <>
            <FindImages />
            <Gallary />
          </>
        }
      />

      <Route
        path={IMAGES_ROUTE}
        element={
          <>
            <FindImages
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              onSearch={handleSearch}
            />
            <Images searchQuery={searchQuery} />
          </>
        }
      />

      {routes
        .filter(
          (route) => route.path !== GALLERY_ROUTE && route.path !== IMAGES_ROUTE
        )
        .map(({ path, Component }) => (
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
