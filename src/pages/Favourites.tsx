import React from 'react';
import { GalleryWrapper, ImageGrid } from './Images.styled';
import {
  FavouritesContainer,
  EmptyState,
  EmptyStateTitle,
  FavouritesText,
} from './Favourites.styled';
import ImageCardComponent from '../components/layout/ImageCard';
import { useFavorites } from '../hooks/UseFavorites';
import type { UnsplashImage } from '../components/common/FavoritesContext';

const Favourites: React.FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <GalleryWrapper>
        <FavouritesContainer>
          <EmptyState>
            <EmptyStateTitle>
              Your <span>Favorites</span> List Is Empty
            </EmptyStateTitle>
          </EmptyState>
        </FavouritesContainer>
      </GalleryWrapper>
    );
  }

  return (
    <GalleryWrapper>
      <FavouritesContainer>
        <FavouritesText>
          <span>Saved by you</span>
          <br />
          Your favorites list
        </FavouritesText>
        <ImageGrid>
          {favorites.map((image: UnsplashImage) => (
            <ImageCardComponent
              key={image.id}
              image={image}
              onClick={() => {}}
            />
          ))}
        </ImageGrid>
      </FavouritesContainer>
    </GalleryWrapper>
  );
};

export default Favourites;
