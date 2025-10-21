import styled from 'styled-components';

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }
`;

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

export const Image = styled.img`
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
export const StyledImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  display: block;
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

export const Pagination = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  font-family: 'Lexend Deca';
  font-weight: 600;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.$active ? '#F17900' : '#ddd')};
  background: ${(props) => (props.$active ? '#F17900' : '#fff')};
  color: ${(props) => (props.$active ? '#fff' : '#000')};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 18px;
  min-width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: #f17900;
    color: #fff;
    border-color: #f17900;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
export const GalleryWrapper = styled.div`
  background: #fff;
  padding: 40px 0;
`;

export const GalleryContainer = styled.div<{ $blur?: boolean }>`
  max-width: 1310px;
  margin: 0 auto;
  padding: 0 15px;
  transition: filter 0.3s ease;

  ${({ $blur }) =>
    $blur &&
    `
    filter: blur(8px);
  `}
`;

export const ArrowButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-top: 2px solid #000;
    border-right: 2px solid #000;
    transform: rotate(45deg);
    transition: border-color 0.3s ease;
  }

  &:hover:not(:disabled) {
    background: #f17900;
    border-color: #f17900;

    &::before {
      border-color: #fff;
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;

    &::before {
      border-color: #999;
    }
  }
`;

export const LoadingText = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  padding: 60px 0;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
  margin-bottom: 30px;
  padding: 0 15px;
  max-width: 1310px;
  margin-left: auto;
  margin-right: auto;
`;

export const SortLabel = styled.span`
  font-family: 'Lexend Deca';
  font-size: 16px;
  color: #666;
  font-weight: 400;
`;

export const SortDropdown = styled.div`
  position: relative;
  display: inline-block;
  color: #c4c4c4;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #c4c4c4;
  border-radius: 6px;
  cursor: pointer;
  font-family: 'Lexend Deca';
  font-size: 14px;
  color: #c4c4c4;
  min-width: 120px;
  justify-content: space-between;
  transition: all 0.2s ease;
`;

export const DropdownArrow = styled.span<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 1px;
  margin-top: 4px;
  padding: 4px;
  list-style: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const DropdownItem = styled.li<{ $active?: boolean }>`
  padding: 8px 12px;
  font-family: 'Lexend Deca';
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: ${(props) => (props.$active ? '500' : '400')};
`;
export const ArrowIcon = styled.div`
  width: 12px;
  height: 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid #333;
    border-right: 2px solid #333;
    transform: translate(-50%, -50%) rotate(45deg);
    transition: transform 0.2s ease;
  }
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

export const FavoriteButton = styled.div<{ $isFavorite?: boolean }>`
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  transition: all 0.3s ease;

  svg {
    fill: ${({ $isFavorite }) => ($isFavorite ? '#F17900' : '#FFF')};
    transition: fill 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    background: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`;
