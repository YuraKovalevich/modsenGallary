import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Wrapper,
  BackgroundImage,
  Container,
  Title,
  AccentText,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from './FindImages.styled';
import image from '../../assets/find.jpg';
import FiSearch from '../../assets/FiSearch.png';
import { IMAGES_ROUTE } from '../../constants/linkRoutes';

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
  const isImagesPage = location.pathname === IMAGES_ROUTE;

  const [localQuery, setLocalQuery] = useState(searchQuery);

  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);
    if (onSearchChange) onSearchChange(newQuery);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = localQuery.trim();
    if (!trimmedQuery) return;

    if (!isImagesPage) {
      navigate(`/images?search=${encodeURIComponent(trimmedQuery)}`, {
        state: { searchQuery: trimmedQuery },
      });
    } else if (onSearch) {
      onSearch(trimmedQuery);
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
