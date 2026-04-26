import React, { createContext, useEffect, useState } from 'react';

import type { UnsplashImage } from '../../services/unsplashApi';

interface FavoritesContextType {
  favorites: UnsplashImage[];
  addToFavorites: (image: UnsplashImage) => void;
  removeFromFavorites: (id: string) => void;
  toggleFavorite: (image: UnsplashImage) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<UnsplashImage[]>(() => {
    const saved = localStorage.getItem('favoriteImages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoriteImages', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (image: UnsplashImage) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === image.id) ? prev : [...prev, image]
    );
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((f) => f.id !== id));
  };

  const toggleFavorite = (image: UnsplashImage) => {
    setFavorites((prev) =>
      prev.find((f) => f.id === image.id)
        ? prev.filter((f) => f.id !== image.id)
        : [...prev, image]
    );
  };

  const isFavorite = (id: string) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
