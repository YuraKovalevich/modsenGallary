import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import image from '../../assets/find.jpg';
import FiSearch from '../../assets/FiSearch.png';
import { IMAGES_ROUTE } from '../../constants/linkRoutes';
import {
  AccentText,
  BackgroundImage,
  Container,
  SearchContainer,
  SearchIcon,
  SearchInput,
  Title,
  Wrapper,
} from './FindImages.styled';

interface FindImagesProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  onSearch?: (query: string) => void;
}

const FindImages: React.FC<FindImagesProps> = ({
  searchQuery = '',
  onSearchChange,
  onSearch,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isImagesPage = location.pathname === IMAGES_ROUTE;

  const paramQuery = searchParams.get('search') || '';
  const stateQuery = location.state?.searchQuery || '';
  const initialQuery = paramQuery || stateQuery || searchQuery || '';

  const [localQuery, setLocalQuery] = useState(initialQuery);

  useEffect(() => {
    setLocalQuery(initialQuery);
  }, [initialQuery, location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);
    onSearchChange?.(newQuery);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = localQuery.trim();

    if (!trimmedQuery) {
      setLocalQuery('');
      navigate(IMAGES_ROUTE, { replace: true });
      onSearch?.('');
      return;
    }

    if (!isImagesPage) {
      navigate(`/images?search=${encodeURIComponent(trimmedQuery)}`, {
        state: { searchQuery: trimmedQuery },
      });
    } else {
      navigate(`/images?search=${encodeURIComponent(trimmedQuery)}`, {
        replace: true,
        state: { searchQuery: trimmedQuery },
      });
      onSearch?.(trimmedQuery);
    }
  };

  return (
    <Wrapper>
      <BackgroundImage src={image} alt="Background" />
      <Container>
        <Title>
          Let's Find Some <AccentText>Images</AccentText> Here!
        </Title>
        {isImagesPage && (
          <SearchContainer onSubmit={handleSubmit}>
            <SearchIcon src={FiSearch} alt="Search" />
            <SearchInput
              type="text"
              placeholder="Search images..."
              value={localQuery}
              onChange={handleInputChange}
            />
          </SearchContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default FindImages;
