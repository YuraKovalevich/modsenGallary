import {
  CATEGORY_ROUTE,
  FAVOURITES_ROUTE,
  GALLERY_ROUTE,
  IMAGES_ROUTE,
  NOTFOUND_ROUTE,
} from './constants/linkRoutes';
import Favourites from './pages/Favourites';
import Gallary from './pages/Gallary';
import Images from './pages/Images';
import NotFound from './pages/NotFound';

export const routes = [
  {
    path: GALLERY_ROUTE,
    Component: Gallary,
  },
  {
    path: CATEGORY_ROUTE,
    Component: Gallary,
  },
  {
    path: IMAGES_ROUTE,
    Component: Images,
  },
  {
    path: FAVOURITES_ROUTE,
    Component: Favourites,
  },
  {
    path: NOTFOUND_ROUTE,
    Component: NotFound,
  },
];
