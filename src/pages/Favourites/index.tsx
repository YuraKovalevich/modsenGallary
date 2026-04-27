import { useFavoritesContext } from '@/components/common/useFavoritesContext';
import ImageCardComponent from '@/components/layout/ImageCard';
import type { UnsplashImage } from '@/services/unsplashApi';

import { GalleryWrapper, ImageGrid } from '../Images/styles';
import {
  EmptyState,
  EmptyStateTitle,
  FavouritesContainer,
  FavouritesText,
} from './styles';

const Favourites = () => {
  const { favorites } = useFavoritesContext();

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
            <ImageCardComponent key={image.id} image={image} />
          ))}
        </ImageGrid>
      </FavouritesContainer>
    </GalleryWrapper>
  );
};

export default Favourites;
