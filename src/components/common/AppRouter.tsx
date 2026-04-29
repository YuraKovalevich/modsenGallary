import {
  GALLERY_ROUTE,
  IMAGES_ROUTE,
  NOTFOUND_ROUTE,
} from '@constants/linkRoutes.ts';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { routes } from '@/routes.ts';

import Gallary from '../../pages/Gallary/index';
import Images from '../../pages/Images/index';
import FindImages from '../layout/FindImages';

const galleryAndImagesRoutes = new Set<string>([GALLERY_ROUTE, IMAGES_ROUTE]);
const fallbackRoutes = routes.filter(
  (route) => !galleryAndImagesRoutes.has(route.path)
);

const GalleryImagesLayout = () => (
  <>
    <FindImages />
    <Outlet />
  </>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<GalleryImagesLayout />}>
        <Route path={GALLERY_ROUTE} element={<Gallary />} />
        <Route path={IMAGES_ROUTE} element={<Images />} />
      </Route>

      {fallbackRoutes.map(({ path, Component }) => (
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
