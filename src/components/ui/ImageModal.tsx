import { useEffect } from 'react';

import FavoutitesLogo from '../../assets/FavoutitesLogo';
import { useFavorites } from '../../hooks/useFavorites';
import { FavoriteButton } from '../../pages/Images.styled';
import type { UnsplashImage } from '../../services/unsplashApi';
import BtnLeft from './BtnLeft';
import BtnRight from './BtnRight';
import CloseBtn from './CloseBtn';
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
  const { toggleFavorite, isFavorite } = useFavorites();
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
  }, [currentIndex]);

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImageContainer>
          <ModalImage
            src={currentImage.urls.full}
            alt={currentImage.alt_description || 'Image'}
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
            {truncateText(currentImage.alt_description || '', 40)}
          </ModalText>

          <FavoriteButton
            $isFavorite={favorite}
            onClick={() => toggleFavorite(currentImage)}
          >
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
