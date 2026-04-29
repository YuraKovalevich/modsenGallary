export const linkRoutes = {
  gallery: '/',
  category: '/',
  images: '/images',
  favourites: '/favourites',
  notFound: '/404',
} as const;

export const {
  gallery: GALLERY_ROUTE,
  category: CATEGORY_ROUTE,
  images: IMAGES_ROUTE,
  favourites: FAVOURITES_ROUTE,
  notFound: NOTFOUND_ROUTE,
} = linkRoutes;
