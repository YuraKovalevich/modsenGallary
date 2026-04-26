import React from 'react';

import { ImageGrid } from '../../pages/Images.styled';
import type { UnsplashImage } from '../../services/unsplashApi';
import ImageCard from './ImageCard';

interface Props {
  images: UnsplashImage[];
  onImageClick?: (index: number) => void;
}

const ImageGridComponent: React.FC<Props> = ({ images, onImageClick }) => (
  <ImageGrid>
    {images.map((img, index) => (
      <ImageCard
        key={img.id}
        image={img}
        onClick={() => onImageClick?.(index)}
      />
    ))}
  </ImageGrid>
);

export default ImageGridComponent;
