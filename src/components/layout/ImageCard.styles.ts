import styled from 'styled-components';

export const ImageCard = styled.div`
  background: #f0f1f1;
  border-radius: 1px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
`;

export const ImageInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 10px 10px 10px;
  min-height: 60px;
`;

export const ImageTitle = styled.h3`
  font-family: 'Lexend Deca';
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
  line-height: 1.4;
  max-width: 219px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const FavoriteIconWrapper = styled.div<{ $isFavorite?: boolean }>`
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;

  background: ${({ $isFavorite }) => ($isFavorite ? '#fff' : 'transparent')};

  svg {
    fill: ${({ $isFavorite }) => ($isFavorite ? '#F17900' : 'transparent')};
    transition: fill 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
