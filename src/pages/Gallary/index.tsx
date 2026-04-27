import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Loader from '@/components/ui/Loader';
import {
  getCategoryImage,
  type UnsplashCategoryImage,
} from '@/services/unsplashApi';

import { GalleryWrapper } from '../Images/styles';
import {
  CategoryCard,
  CategoryGrid,
  CategoryImage,
  CategoryName,
  GalleryContainer,
} from './styles';

const categories = [
  'Art',
  'Cars',
  'Architecture',
  'Food',
  'Religion',
  'Clothes',
  'Technologies',
  'Music',
  'Business',
  'Sport',
  'Social',
  'Sky',
];

interface CategoryItem {
  name: string;
  image: UnsplashCategoryImage | null;
}

const Gallery = () => {
  const [items, setItems] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadImages = async () => {
      const results = await Promise.all(
        categories.map(async (name) => ({
          name,
          image: await getCategoryImage(name),
        }))
      );

      setItems(results);
      setLoading(false);
    };

    loadImages();
  }, []);

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/images?search=${encodeURIComponent(categoryName)}`, {
      state: { searchQuery: categoryName },
    });
  };

  const handleCategoryCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const categoryName = event.currentTarget.dataset.categoryName;
    if (!categoryName) return;
    handleCategoryClick(categoryName);
  };

  if (loading) return <Loader />;

  return (
    <GalleryWrapper>
      <GalleryContainer>
        <CategoryGrid>
          {items.map(({ name, image }) => (
            <CategoryCard
              key={name}
              data-category-name={name}
              onClick={handleCategoryCardClick}
            >
              {image?.urls?.regular ? (
                <CategoryImage src={image.urls.regular} alt={name} />
              ) : (
                'error'
              )}
              <CategoryName>{name}</CategoryName>
            </CategoryCard>
          ))}
        </CategoryGrid>
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default Gallery;
