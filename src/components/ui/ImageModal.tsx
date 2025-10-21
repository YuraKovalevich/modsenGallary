import { useEffect } from 'react';
import type { UnsplashImage } from '../../services/unsplashApi';
import {
  CloseButton,
  ModalContent,
  ModalImage,
  Overlay,
  ArrowButton,
  ModalDescription,
  ModalText,
} from './ImageModal.styled';
import FavoutitesLogo from '../../assets/FavoutitesLogo';
import CloseBtn from './CloseBtn';
import BtnLeft from './BtnLeft';
import BtnRight from './BtnRight';
import { useFavorites } from '../../hooks/UseFavorites';
import { FavoriteButton } from '../../pages/Images.styled';

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
        <ArrowButton left onClick={onPrev}>
          <BtnLeft />
        </ArrowButton>
        <div>
          <ModalImage
            src={currentImage.urls.full}
            alt={currentImage.alt_description || 'Image'}
          />
          <ModalDescription>
            <ModalText>{currentImage.alt_description}</ModalText>

            <FavoriteButton
              $isFavorite={favorite}
              onClick={() => toggleFavorite(currentImage)}
            >
              <FavoutitesLogo />
            </FavoriteButton>
          </ModalDescription>
        </div>
        <ArrowButton onClick={onNext}>
          <BtnRight />
        </ArrowButton>
        <CloseButton onClick={onClose}>
          <CloseBtn />
        </CloseButton>
      </ModalContent>
    </Overlay>
  );
};

export default ImageModal;
