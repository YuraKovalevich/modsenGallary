import React from 'react';

import ImageCardComponent from '../components/layout/ImageCard';
import { useFavorites } from '../hooks/useFavorites';
import type { UnsplashImage } from '../services/unsplashApi';
import {
  EmptyState,
  EmptyStateTitle,
  FavouritesContainer,
  FavouritesText,
} from './Favourites.styled';
import { GalleryWrapper, ImageGrid } from './Images.styled';

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
