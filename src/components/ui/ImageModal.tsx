import { FavoriteButton } from '@pages/Images.styled.ts';
import type { UnsplashImage } from '@services/unsplashApi.ts';
import { useEffect } from 'react';

import BtnLeft from '../../assets/BtnLeft';
import BtnRight from '../../assets/BtnRight';
import CloseBtn from '../../assets/CloseBtn';
import FavoutitesLogo from '../../assets/FavoutitesLogo';
import { useFavoritesContext } from '../common/useFavoritesContext';
import {
  ArrowButton,
  ArrowsContainer,
  CloseButton,
  ImageContainer,
  ModalContent,
  ModalDescription,
  ModalImage,
  ModalText,
  Overlay,
  SideArrow,
} from './ImageModal.styled';

interface Props {
  images: UnsplashImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onBlurToggle: (blur: boolean) => void;
}

const ImageModal: React.FC<Props> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  onBlurToggle,
}) => {
  const { toggleFavorite, isFavorite } = useFavoritesContext();
  const currentImage = images[currentIndex];
  const favorite = isFavorite(currentImage.id);

  const truncateText = (text: string, maxLength: number) => {
    if (!text) return 'No description';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  useEffect(() => {
    onBlurToggle(true);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      onBlurToggle(false);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onBlurToggle, onClose, onNext, onPrev]);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleFavoriteClick = () => {
    toggleFavorite(currentImage);
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContent onClick={handleContentClick}>
        <ImageContainer>
          <ModalImage
            src={currentImage.urls.full}
            alt={currentImage.altDescription || 'Image'}
          />

          <CloseButton onClick={onClose}>
            <CloseBtn />
          </CloseButton>

          <SideArrow $left onClick={onPrev}>
            <BtnLeft />
          </SideArrow>

          <SideArrow onClick={onNext}>
            <BtnRight />
          </SideArrow>
        </ImageContainer>

        <ModalDescription>
          <ModalText>
            {truncateText(currentImage.altDescription || '', 40)}
          </ModalText>

          <FavoriteButton $isFavorite={favorite} onClick={handleFavoriteClick}>
            <FavoutitesLogo />
          </FavoriteButton>
        </ModalDescription>

        <ArrowsContainer>
          <ArrowButton onClick={onPrev}>
            <BtnLeft />
          </ArrowButton>

          <ArrowButton onClick={onNext}>
            <BtnRight />
          </ArrowButton>
        </ArrowsContainer>
      </ModalContent>
    </Overlay>
  );
};

export default ImageModal;
