import {
  FavoriteIconWrapper,
  ImageCard,
  ImageInfo,
  ImageTitle,
  StyledImage,
} from '@pages/Images.styled.ts';
import type { UnsplashImage } from '@services/unsplashApi.ts';

import FavoutitesLogo from '../../assets/FavoutitesLogo';
import { useFavoritesContext } from '../common/useFavoritesContext';

interface Props {
  image: UnsplashImage;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  cardIndex?: number;
}

const ImageCardComponent: React.FC<Props> = ({ image, onClick, cardIndex }) => {
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const favorite = isFavorite(image.id);

  const handleFavoriteClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleFavorite(image);
  };

  return (
    <ImageCard onClick={onClick} data-index={cardIndex}>
      <StyledImage
        src={image.urls.regular}
        alt={image.altDescription || 'Image'}
      />
      <ImageInfo>
        <ImageTitle>
          {image.description || image.altDescription || 'Beautiful image'}
        </ImageTitle>
        <FavoriteIconWrapper
          $isFavorite={favorite}
          onClick={handleFavoriteClick}
        >
          <FavoutitesLogo />
        </FavoriteIconWrapper>
      </ImageInfo>
    </ImageCard>
  );
};

export default ImageCardComponent;
