import { ImageGrid } from '@pages/Images.styled.ts';
import type { UnsplashImage } from '@services/unsplashApi.ts';
import { memo, useCallback } from 'react';

import ImageCard from './ImageCard';

interface Props {
  images: UnsplashImage[];
  onImageClick?: (index: number) => void;
}

const ImageGridComponent: React.FC<Props> = ({ images, onImageClick }) => {
  const handleImageClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const index = Number(event.currentTarget.dataset.index ?? -1);
      if (index < 0) return;
      onImageClick?.(index);
    },
    [onImageClick]
  );

  return (
    <ImageGrid>
      {images.map((img, index) => (
        <ImageCard
          key={img.id}
          image={img}
          cardIndex={index}
          onClick={handleImageClick}
        />
      ))}
    </ImageGrid>
  );
};

export default memo(ImageGridComponent);
