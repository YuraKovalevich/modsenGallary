import { IMAGES_ROUTE } from '@constants/linkRoutes.ts';
import { searchImages } from '@services/unsplashApi.ts';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import {
  AccentText,
  Container,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchWrapper,
  SuggestionItem,
  SuggestionsList,
  Title,
  Wrapper,
} from './FindImages.styled';

const FindImages: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isImagesPage = location.pathname === IMAGES_ROUTE;

  const paramQuery = searchParams.get('search') || '';
  const stateQuery: string = location.state?.searchQuery || '';
  const initialQuery = paramQuery || stateQuery || '';

  const [localQuery, setLocalQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    setLocalQuery(initialQuery);
  }, [initialQuery, location.search]);

  useEffect(() => {
    const query: string = localQuery.trim().toLowerCase();

    if (!isImagesPage || !query) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(async () => {
      try {
        const result = await searchImages(
          query,
          1,
          24,
          undefined,
          controller.signal
        );
        const nextSuggestions = Array.from(
          new Set(
            result.results
              .map((image) => image.description ?? image.altDescription ?? '')
              .map((title) => title.trim())
              .filter((title) => title.length > 0)
              .filter((title) => title.toLowerCase().includes(query))
          )
        ).slice(0, 6);

        setSuggestions(nextSuggestions);
      } catch {
        setSuggestions([]);
      }
    }, 250);

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [isImagesPage, localQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setLocalQuery(newQuery);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = localQuery.trim();

    if (!trimmedQuery) {
      setLocalQuery('');
      navigate(IMAGES_ROUTE, { replace: true });
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
    }
  };

  const showSuggestions =
    isImagesPage &&
    isFocused &&
    localQuery.trim().length > 0 &&
    suggestions.length > 0;

  const handleSuggestionClick = (value: string) => {
    setLocalQuery(value);
    navigate(`/images?search=${encodeURIComponent(value)}`, {
      replace: isImagesPage,
      state: { searchQuery: value },
    });
    setIsFocused(false);
  };

  return (
    <Wrapper>
      <Container>
        <Title>
          Let's Find Some <AccentText>Images</AccentText> Here!
        </Title>
        {isImagesPage && (
          <SearchWrapper>
            <SearchContainer onSubmit={handleSubmit}>
              <SearchIcon />
              <SearchInput
                type="text"
                placeholder="Search images..."
                value={localQuery}
                onChange={handleInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 120)}
              />
            </SearchContainer>
            {showSuggestions && (
              <SuggestionsList>
                {suggestions.map((suggestion) => (
                  <SuggestionItem
                    key={suggestion}
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </SuggestionItem>
                ))}
              </SuggestionsList>
            )}
          </SearchWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default FindImages;
