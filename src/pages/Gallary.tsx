import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getCategoryImage,
  type UnsplashCategoryImage,
} from '../services/unsplashApi';
import {
  GalleryContainer,
  LoadingText,
  CategoryGrid,
  CategoryCard,
  CategoryImage,
  CategoryName,
} from './Gallary.styled';
import { GalleryWrapper } from './Images.styled';

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

interface Category {
  name: string;
  image: UnsplashCategoryImage | null;
}

const Gallary = () => {
  const [items, setItems] = useState<Category[]>([]);
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

  const handleCategoryClick = (name: string) => {
    navigate(`/images?q=${encodeURIComponent(name)}`, {
      state: { searchQuery: '' },
    });
  };

  if (loading) return <LoadingText>Загрузка категорий...</LoadingText>;

  return (
    <GalleryWrapper>
      <GalleryContainer>
        <CategoryGrid>
          {items.map(({ name, image }) => (
            <CategoryCard key={name} onClick={() => handleCategoryClick(name)}>
              {image ? (
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

export default Gallary;
