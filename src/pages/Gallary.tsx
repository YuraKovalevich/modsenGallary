import { useEffect, useState } from 'react';
import {
  getCategoryImage,
  type UnsplashCategoryImage,
} from '../services/unsplashApi';
import {
  GalleryContainer,
  CategoryGrid,
  CategoryCard,
  CategoryImage,
  CategoryName,
  LoadingText,
} from './Gallary.styled';

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

  if (loading) return <LoadingText>Загрузка категорий...</LoadingText>;

  return (
    <GalleryContainer>
      <CategoryGrid>
        {items.map(({ name, image }) => (
          <CategoryCard key={name}>
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
  );
};

export default Gallary;
