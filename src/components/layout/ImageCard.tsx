import React from 'react';
import {
  FavoriteIconWrapper,
  ImageCard,
  ImageInfo,
  ImageTitle,
  StyledImage,
} from '../../pages/Images.styled';
import FavoutitesLogo from '../../assets/FavoutitesLogo';
import { useFavorites } from '../../hooks/useFavorites';
import type { UnsplashImage } from '../../services/unsplashApi';

interface Props {
  image: UnsplashImage;
  onClick?: () => void;
}

const ImageCardComponent: React.FC<Props> = ({ image, onClick }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(image.id);

  return (
    <ImageCard onClick={onClick}>
      <StyledImage
        src={image.urls.regular}
        alt={image.alt_description || 'Image'}
      />
      <ImageInfo>
        <ImageTitle>
          {image.description || image.alt_description || 'Beautiful image'}
        </ImageTitle>
        <FavoriteIconWrapper
          $isFavorite={favorite}
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(image);
          }}
        >
          <FavoutitesLogo />
        </FavoriteIconWrapper>
      </ImageInfo>
    </ImageCard>
  );
};

export default ImageCardComponent;
