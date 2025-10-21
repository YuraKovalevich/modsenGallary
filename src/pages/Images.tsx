import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { GalleryWrapper, GalleryContainer } from './Images.styled';
import {
  getRandomImages,
  searchImages,
  type UnsplashImage,
} from '../services/unsplashApi';
import { NoResultsText } from '../components/layout/FindImages.styled';
import ImageGrid from '../components/layout/ImageGrid';
import SortDropdown from '../components/common/SortDropdown';
import Pagination from '../components/ui/Pagination';
import ImageModal from '../components/ui/ImageModal';
import Loader from '../components/ui/Loader';

interface Props {
  searchQuery?: string;
}

const Images: React.FC<Props> = ({ searchQuery = '' }) => {
  const location = useLocation();
  const stateSearchQuery = location.state?.searchQuery || '';
  const [searchParams] = useSearchParams();
  const categoryQuery = searchParams.get('q')?.trim() || '';
  const query = categoryQuery || searchQuery || stateSearchQuery;

  const [images, setImages] = useState<UnsplashImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState<'relevant' | 'latest'>('relevant');

  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        if (query) {
          const result = await searchImages(query, currentPage, 12, sortBy);
          setImages(result.results);
          setTotalPages(Math.min(result.total_pages, 4));
        } else {
          const data = await getRandomImages(currentPage, 12);
          setImages(data);
          setTotalPages(4);
        }
      } catch (err) {
        console.error(err);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };
    loadImages();
  }, [query, currentPage, sortBy]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (sort: 'relevant' | 'latest') => {
    setSortBy(sort);
    setCurrentPage(1);
  };

  const handleOpenModal = (index: number) => setModalIndex(index);
  const handleCloseModal = () => setModalIndex(null);
  const handlePrevImage = () => {
    if (modalIndex !== null)
      setModalIndex((modalIndex - 1 + images.length) % images.length);
  };
  const handleNextImage = () => {
    if (modalIndex !== null) setModalIndex((modalIndex + 1) % images.length);
  };

  if (loading) return <Loader />;
  if (!images.length)
    return (
      <GalleryWrapper>
        <NoResultsText>
          The Search Didn't Yield Any Results, Please Try <span>Again</span>.
        </NoResultsText>
      </GalleryWrapper>
    );

  return (
    <GalleryWrapper>
      <SortDropdown sortBy={sortBy} onSortChange={handleSortChange} />
      <GalleryContainer $blur={blur}>
        <ImageGrid images={images} onImageClick={handleOpenModal} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </GalleryContainer>

      {modalIndex !== null && (
        <ImageModal
          images={images}
          currentIndex={modalIndex}
          onClose={handleCloseModal}
          onPrev={handlePrevImage}
          onNext={handleNextImage}
          onBlurToggle={setBlur}
        />
      )}
    </GalleryWrapper>
  );
};

export default Images;
