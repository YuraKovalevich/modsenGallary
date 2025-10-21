import React from 'react';
import ImageCard from './ImageCard';
import type { UnsplashImage } from '../../services/unsplashApi';
import { ImageGrid } from '../../pages/Images.styled';

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
