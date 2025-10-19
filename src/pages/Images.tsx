import { useEffect, useState } from 'react';
import {
  getRandomImages,
  searchImages,
  type UnsplashImage,
} from '../services/unsplashApi';
import {
  GalleryContainer,
  ImageGrid,
  ImageCard,
  Image,
  ImageInfo,
  ImageTitle,
  FavoriteIconWrapper,
  Pagination,
  PageButton,
  LoadingText,
  ArrowButton,
  GalleryWrapper,
} from './Images.styled';
import Favoutites from '../assets/FavoutitesLogo';

interface ImageGalleryProps {
  searchQuery?: string;
}

const Images = ({ searchQuery = '' }: ImageGalleryProps) => {
  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);

      const [data] = await Promise.all([
        (async () => {
          if (searchQuery) {
            const result = await searchImages(searchQuery, currentPage);
            setTotalPages(Math.ceil(result.total / 12));
            return result.results;
          } else {
            const data = await getRandomImages(currentPage);
            setTotalPages(4);
            return data;
          }
        })(),
      ]);

      setImages(data);
      setLoading(false);
    };

    loadImages();
  }, [currentPage, searchQuery]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <LoadingText>Loading...</LoadingText>;
  }

  return (
    <GalleryWrapper>
      <GalleryContainer>
        <ImageGrid>
          {images.map((image) => (
            <ImageCard key={image.id}>
              <Image
                src={image.urls.regular}
                alt={image.alt_description || 'Unsplash image'}
              />
              <ImageInfo>
                <ImageTitle>
                  {image.description ||
                    image.alt_description ||
                    'Beautiful image'}
                </ImageTitle>
                <FavoriteIconWrapper>
                  <Favoutites />
                </FavoriteIconWrapper>
              </ImageInfo>
            </ImageCard>
          ))}
        </ImageGrid>
        {totalPages > 1 && (
          <Pagination>
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <PageButton
                  key={page}
                  $active={currentPage === page}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </PageButton>
              );
            })}
            <ArrowButton
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </Pagination>
        )}
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default Images;
